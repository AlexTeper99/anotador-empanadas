"use server";

import connectDB from "./connection-db";

export const getFlavours = async () => {
  console.log("getFlavours");
  return ["Carne Suave", "Carne Picante", "Pollo", "Vegetariano"];
};
export async function testDBConnection() {
  try {
    await connectDB();

    return "first server action";
  } catch (error) {
    return { error };
  }
}
