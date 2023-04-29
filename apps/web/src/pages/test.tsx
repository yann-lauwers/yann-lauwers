"use client";

import Head from "next/head";

export default function Home() {
  const a = process.env.NEXT_PUBLIC_TEST_ENV;
  console.log(a);
  return (
    <>
      <Head>
        <title>Test</title>
      </Head>
      <div className="z-0 h-full">{a}</div>
    </>
  );
}
