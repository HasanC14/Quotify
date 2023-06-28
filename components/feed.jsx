'use client'
import { useState, useEffect } from 'react';
import PostCard from './PostCard';

const QuoteList = ({ data, HandleTag }) => {
    return (
        <div className='mt-16 prompt_layout'>
            {data.map((post) => (
                <PostCard key={post._id} post={post} HandleTag={HandleTag} />
            ))}
        </div>
    );
};

const Feed = () => {
    const [SearchText, setSearchText] = useState('');
    const [Posts, setPosts] = useState([]);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/post');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <section className='feed'>
            <form className='relative w-full flex-center'>
                <input
                    type='text'
                    placeholder='Search for tag or username'
                    className='search_input peer'
                    value={SearchText}
                    onChange={handleSearch}
                    required
                />
            </form>
            <QuoteList data={Posts} HandleTag={() => { }} />
        </section>
    );
};

export default Feed;
