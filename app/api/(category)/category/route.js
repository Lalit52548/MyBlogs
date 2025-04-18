import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";

export async function GET() {
    const category = await prisma.category.findMany({})
    return NextResponse.json(category)
}

export const POST = async (req) => {
    try {
        const { name } = await req.json();
        if (!name) {
            return NextResponse.json({
                message: "please check your user details and try again later.",
                status: 400,
            });
        }
        const category = await prisma.category.create({
            data: {
                name
            },
        });
        if (!category) {
            return NextResponse.json({
                message: "category not created",
                status: 400,
            });
        }
        return NextResponse.json({
            status: 201,
            message: "category created successfully",
            data: category,
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: error.message,
        });
    }
};