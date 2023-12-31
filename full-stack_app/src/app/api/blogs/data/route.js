import Blog from '../../../../models/blogModel';
import { dbConnect } from '../../../../dbConfig/dbConfig';
import { NextResponse } from "next/server";

dbConnect();

export const GET = async (request) => {
    try {
        const blogs = await Blog.find();
        console.log(blogs);
        return NextResponse.json(blogs);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch blogs!");
    }
};