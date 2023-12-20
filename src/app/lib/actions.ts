"use server";

import connectDB from "./connection-db";
import Script from "next/script";
import { sha256 } from "crypto-hash";
import { Order } from "@/models/Models";

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

    // //how can i check in the mongoose Order model in my db that i dont have the actual id?
    let id;
    let obj = true;
    while (obj) {
      const newId = Math.random().toString(36).slice(2);
      const order = await Order.findOne({ id: newId });
      // id = newId;

      // if (id) {
      //   obj = false;
      // }
      if (!order) {
        obj = false;
        id = newId;
      }
    }

    // // console.log("ownerHash", ownerHash);
    //console.log("id", id);

    const order = new Order({
      id: "121321432",
      isClosed: false,
      orderItem: [],
    });

    order.set("ownerHash", order._id);
    await order.save();
    // console.log(order);

    //   return { id: order.id, ownerHash: order.ownerHash };
    return JSON.parse(JSON.stringify("orden creada"));
  } catch (error) {
    return { error };
  }
};

// const GenerateNewId = async () => {
//   let obj = true;
//   while (obj) {
//     const newId = Math.random().toString(36).slice(2);
//     const order = await Order.findById(newId);

//     if (!order) {
//       obj = false;
//       return newId;
//     }
//   }
// };
