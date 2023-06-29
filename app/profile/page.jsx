'use client'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Profile from '@components/profile';

const page = () => {
    const { data: session } = useSession()
    const [Posts, setPosts] = useState([])
    const router = useRouter()
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`/api/users/${session.user.id}/posts`);
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            }
        };
        if (session?.user.id) { fetchPosts() }
    }, []);
    const HandleEdit = (post) => {
        router.push(`/update_post?id=${post._id}`)
    }
    const HandleDelete = async (post) => {
        const hasConfirmed = confirm('Are you sure you want to delete the post')
        if (hasConfirmed) {
            fetch(`/api/post/${post._id.toString()}`,
                { method: 'DELETE' })
        }
        const FilteredPosts = Posts.filter((p) => { p._id === post._id })
        setPosts(FilteredPosts)
    }
    return (
        <Profile
            name={'My'}
            data={Posts}
            HandleEdit={HandleEdit}
            HandleDelete={HandleDelete}
        />
    );
};

export default page;