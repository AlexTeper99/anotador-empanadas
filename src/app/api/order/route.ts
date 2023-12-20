import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

import connectDB from "@/app/lib/connection-db";
import { createErrorResponse } from "@/app/lib/utils";
import { NextResponse } from "next/server";
import { Order } from "@/models/Models";

export async function POST(request: Request) {
  try {
    await connectDB();

    console.log("hola facu");
    const body = await request.json();

    const order = await new Order(body).save();

    return new NextResponse(JSON.stringify(order), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return createErrorResponse(error.message, error.code);
  }
}
