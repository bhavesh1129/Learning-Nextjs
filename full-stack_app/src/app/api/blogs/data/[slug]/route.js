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

export async function DELETE(request, { params }) {
    const slug = params.slug;
    try {
        const blog = await Blog.findOne({ slug });
        if (!blog) {
            return NextResponse.json({ error: "Blog not found", status: 404 });
        }
        const deletedBlog = await Blog.findByIdAndDelete(blog._id);
        if (!deletedBlog) {
            return NextResponse.json({ error: "Blog not found", status: 404 });
        }
        return NextResponse.json({ message: "Blog deleted successfully", status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Error deleting blog: " + error.message, status: 500 });
    }
};
