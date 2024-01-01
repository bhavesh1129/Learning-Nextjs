import Blog from '../../../../../models/blogModel';
import { dbConnect } from '../../../../../dbConfig/dbConfig';
import { NextResponse } from "next/server";

dbConnect();

export const GET = async (request, { params }) => {
    const slug = params.slug;
    try {
        const blog = await Blog.findOne({ slug });
        return NextResponse.json(blog);
    } catch (err) {
        console.log(err);
        throw new Error(`Failed to fetch blog with ${slug}!`);
    }
};