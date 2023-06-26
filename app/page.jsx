import React from 'react';
import Feed from "@components/feed"
const Home = () => {
    return (
       <section className='w-full flex-center flex-col'>
<h1 className='head_text text-center'>Share and Discover<br className='mx-md:hidden'/><span className='orange_gradient text-center'>Inspiring Quotes on Quotify</span></h1>
<p className='desc text-center'>Embark on a Journey of Insight and Empowerment: Harness the Collective Wisdom of Quotify's Vibrant Community, Share Inspirational Quotes, and Ignite the Spark of Transformation</p>
<Feed/>
       </section>
    );
};

export default Home;