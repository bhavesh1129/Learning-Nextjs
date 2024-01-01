import Blog from '../../../../models/blogModel';
import { dbConnect } from '../../../../dbConfig/dbConfig';
import { NextResponse } from "next/server";

dbConnect();

export const GET = async (request) => {
    try {
        const blogs = await Blog.find();
        return NextResponse.json(blogs);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch blogs!");
    }
};

export const POST = async (request) => {
    try {
        console.log('Received request body:', request.body);

        const newBlog = await Blog.create(request.body);
        return NextResponse.json(newBlog);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to add blog!");
    }
};

