import prisma from "@/DB/db.config";
import { isValidObjectId } from "@/lib/utils";
import { Types } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { title, content, userId, image, categoryId } = await req.json();
    if (!title || !content || !userId) {
      return NextResponse.json({
        message: "Please fill all the fields",
        status: 400,
      });
    }
    const newpost = await prisma.post.create({
      data: {
        title,
        content,
        image: image ?? "/vercel.svg",
        userId,
        categoryId,
      },
    });

    return NextResponse.json({
      status: 201,
      message: "Post created successfully",
      data: newpost,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
};
export const GET = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
    const cid = searchParams.get("cid");
    const filter = {
      include: {
        user: {
          select: { name: true, email: true },
        },
      },
    };

    if (cid && cid.length > 0) {
      // If cid is provided and is a valid ObjectId, filter by categoryId
      filter.where = {
        categoryId: cid,
      };

      if(!isValidObjectId(cid)){
        throw new Error("Invalid categoryID provided")
      }
    }

    const posts = await prisma.post.findMany(filter);
    if (!posts) {
      return NextResponse.json({
        status: 404,
        message: "Posts not found",
      });
    }
    return NextResponse.json({
      status: 200,
      message: "Posts fetched successfully",
      data: posts,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
};
