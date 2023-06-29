"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/form";

const UpdatePost = () => {
    const router = useRouter();
    const [submitting, setIsSubmitting] = useState(false);
    const [post, setPost] = useState({ quote: "", tag: "" });

    const searchParams = useSearchParams();
    const postId = searchParams.get("id");
    console.log(postId);
    useEffect(() => {
        const getPostDetails = async () => {
            try {
                const response = await fetch(`/api/post/${postId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch post details");
                }
                const data = await response.json();
                setPost({ quote: data.quote, tag: data.tag });
            } catch (error) {
                console.error("Error fetching post details:", error);
            }
        };

        if (postId) {
            getPostDetails();
        }
    }, [postId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(`/api/post/${postId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    quote: post.quote,
                    tag: post.tag,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form
            type="Edit"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={handleSubmit}
        />
    );
};

export default UpdatePost;
