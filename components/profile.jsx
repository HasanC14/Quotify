import PostCard from "./PostCard";


const profile = ({ name, data, HandleEdit, HandleDelete }) => {

    return (
        <section className="w-full ">
            <h1 className="head_text text-left blue_gradient">{name} Profile</h1>
            <div className='mt-16 prompt_layout'>
                {data.map((post) => (
                    <PostCard
                        key={post._id}
                        post={post}
                        HandleEdit={() => HandleEdit(post)}
                        HandleDelete={() => HandleDelete(post)}
                    />
                ))}

            </div>
        </section>
    );
};

export default profile;