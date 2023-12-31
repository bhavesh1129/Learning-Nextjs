import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter the title'],
    },
    description: {
        type: String,
        required: [true, 'Please enter the description'],
        unique: true,
    },
    image: {
        type: String,
    },
    userId: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true });

const Blog = mongoose.models.blogs || mongoose.model("blogs", blogSchema);

export default Blog;