"use client";

import Head from "next/head";

export default function Home() {
  const a = process.env.DATABASE_URL;
  console.log(a);
  return (
    <>
      <Head>
        <title>Yann Lauwers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="z-0 h-full">{a}</div>
    </>
  );
}
