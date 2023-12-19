"use server";

import { GetFlavours, TestDBConnection, CreateOrder } from "@/app/lib/actions";

export default async function Home() {
  // const flavours = await GetFlavours();
  //  const order = await CreateOrder();

  return (
    <main>
      <h1>Flavours</h1>
      {/* <ul>
        {flavours.map((flavour) => (
          <li key={flavour}>{flavour}</li>
        ))}
      </ul> */}
    </main>
  );
}
