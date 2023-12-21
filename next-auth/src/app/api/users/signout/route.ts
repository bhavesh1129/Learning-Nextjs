import { dbConnect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function GET() {
    try {
        const response = NextResponse.json({
            message: "Logout successful",
            success: true,
        });
        response.cookies.set("token", "", {
            httpOnly: true, expires: new Date(0)
        });
        return response;
    } catch (error) {
        console.error("Error while logging out the user ", error);
        return NextResponse.json({
            error: "Failed to logout",
        }, { status: 500 });
    }
}