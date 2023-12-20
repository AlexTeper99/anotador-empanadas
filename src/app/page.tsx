"use server";
import { GetFlavours, TestDBConnection } from "@/app/lib/actions";
import { useEffect } from "react";
import { Button } from "./components/Button";

export default async function Home() {
  //const flavours = await GetFlavours();

  return (
    <main>
      <h1>Flavoursss</h1>
      <Button />

      {/* <ul>
        {flavours.map((flavour) => (
          <li key={flavour}>{flavour}</li>
        ))}
      </ul> */}
    </main>
  );
}
