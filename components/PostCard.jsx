'use client'

import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PostCard = ({ post, HandleTag, HandleEdit, HandleDelete }) => {

    const [Copy, setCopy] = useState('')
    const { data: session } = useSession()
    const pathname = usePathname()
    const HandleCopy = () => {
        setCopy(post.quote)
        navigator.clipboard.writeText(post.quote)
        setTimeout(() => {
            setCopy('')
        }, 3000);
    }
    return (
        <div className="prompt_card">
            <div className="flex justify-between items-start gap-5">
                <div className="flex justify-start items-center gap-3 cursor-pointer">
                    <Image
                        src={post.creator.image}
                        alt="Profile image"
                        height={40}
                        width={40}
                        className="rounded-full object-contain"
                    />
                    <div className="flex flex-col ">
                        <h3 className="font-satoshi font-semibold text-gray-200">{post.creator.username}</h3>
                        <p className="font-inter text-sm text-gray-400">{post.creator.email}</p>
                    </div>
                </div>
                <div className="copy_btn" onClick={HandleCopy}>
                    <Image
                        alt="copy and tick"
                        src={Copy == post.quote ?
                            '/assets/icons/tick.svg' :
                            '/assets/icons/copy.svg'}
                        width={12}
                        height={12}
                    />

                </div>
            </div>
            <p className="my-4 font-satoshi text-sm text-gray-300">{post.quote}</p>
            <p
                className="cursor-pointer font-inter text-sm blue_gradient"
                onClick={() => HandleTag && HandleTag(post.tag)}
            >#{post.tag}</p>

            {session?.user.id === post.creator._id && pathname === '/profile' && (
                <div className="mt-5 flex-center border-t pt-3 gap-4 border-gray-300">
                    <p
                        className="font-inter text-sm green_gradient cursor-pointer"
                        onClick={HandleEdit}>
                        Edit
                    </p>
                    <p
                        className="font-inter text-sm text-red-600 cursor-pointer"
                        onClick={HandleDelete}>
                        Delete
                    </p>
                </div>
            )}
        </div>
    );
};

export default PostCard;