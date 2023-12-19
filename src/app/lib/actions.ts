"use server";

import OrderModel from "@/models/Models";
import connectDB from "./connection-db";
import Script from "next/script";
import { sha256 } from "crypto-hash";

export const GetFlavours = async () => {
  console.log("getFlavours");
  return ["Carne Suave", "Carne Picante", "Pollo", "Vegetariano"];
};

export async function TestDBConnection() {
  try {
    await connectDB();

    return "first server action";
  } catch (error) {
    return { error };
  }
}

export const CreateOrder = async () => {
  try {
    console.log("createOrder");
    await connectDB();

    //how can i check in the mongoose Order model in my db that i dont have the actual id?

    const id = await GenerateNewId();

    // console.log("ownerHash", ownerHash);
    //  console.log("id", id);

    const order = new OrderModel({
      id: id,
      isClosed: false,
      orderItem: [],
    });

    //order.set("ownerHash", order._id);
    await order.save();

    //   return { id: order.id, ownerHash: order.ownerHash };
    return "hola";
  } catch (error) {
    return { error };
  }
};

const GenerateId = () => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
  }
  return id;
};

const GenerateNewId = async () => {
  let obj = true;
  while (obj) {
    const newId = GenerateId();
    const order = await OrderModel.findOne({ id: newId });

    if (!order) {
      obj = false;
      return newId;
    }
  }
};
