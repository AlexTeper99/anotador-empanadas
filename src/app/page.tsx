"use server";

import { getFlavours, testDBConnection } from "@/app/lib/actions";

export default async function Home() {
  const flavours = await getFlavours();

  return (
    <main>
      <h1>Flavours</h1>
      <ul>
        {flavours.map((flavour) => (
          <li key={flavour}>{flavour}</li>
        ))}
      </ul>
    </main>
  );
}
