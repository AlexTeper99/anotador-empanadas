import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import OrderModel from "../../../models/Models";
import connectDB from "@/app/lib/connection-db";
import { createErrorResponse } from "@/app/lib/utils";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const order = await new OrderModel(body).save();

    return new NextResponse(JSON.stringify(order), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return createErrorResponse(error.message, error.code);
  }
}
