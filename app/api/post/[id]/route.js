import Quote from "@models/post";
import { connectToDB } from "@utils/database";


//GET
export const GET = async (request, {params}) => {
    try {
        await connectToDB();
        const post = await Quote.findById(params.id).populate('creator') 
        console.log(post);
        if(!post){
            return new Response("Failed to fetch the post", { status: 404 }); 
        }
        return new Response(JSON.stringify(post), { status: 201 });
    } catch (error) {
        return new Response("Failed to fetch the post", { status: 500 }); 
    }
}
//PATCH
export const PATCH = async (request, {params}) => {
    const { quote, tag } = await request.json();

try {
    await connectToDB();
    const ExistingPost = await Quote.findById(params.id);

    if (!ExistingPost) {
        return new Response("Post not found", { status: 404 });
    }

    ExistingPost.quote = quote;
    ExistingPost.tag = tag;

    await ExistingPost.save();

    return new Response(JSON.stringify(ExistingPost), { status: 200 });
} catch (error) {
    return new Response("Failed to update the post", { status: 500 });
}
}
//DELETE
export const DELETE = async (request, {params}) => {
    try {
        await connectToDB();
        await Quote.findByIdAndRemove(params.id) 
        return new Response("Post deleted successfully", { status: 200 }); 
    } catch (error) {
        return new Response("Failed to fetch the post", { status: 500 }); 
    }
}