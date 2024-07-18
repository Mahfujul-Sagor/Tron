import { NextResponse } from "next/server.js";
import prisma from "../../../../utils/connect.js";

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (err) {
    console.log("error in single post route " ,err);
    return NextResponse.json(
      { message: "Something went wrong!" }, { status: 500 }
    );
  }
};