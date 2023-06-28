import Quote from "@models/post";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB();
        const posts = await Quote.find({}).populate('creator') 
        return new Response(JSON.stringify(posts), { status: 201 });
    } catch (error) {
        return new Response("Failed to fetch posts", { status: 500 }); 
    }
}