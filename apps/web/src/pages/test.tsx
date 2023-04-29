"use client";

import Head from "next/head";

export default function Home() {
  const a = process.env.NEXT_PUBLIC_DB_URL;

  const addTodo = async () => {
    const response = await fetch("/api/add", { method: "POST", body: JSON.stringify({ text: "test" }) });

    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  const getTodos = async () => {
    const response = await fetch("/api/get");
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  return (
    <>
      <Head>
        <title>Test</title>
      </Head>
      <div className="z-0 h-full">
        <button onClick={async () => console.log(await getTodos())}>Get</button>
        <br />
        <button onClick={async () => console.log(await addTodo())}>Add</button>
        <br />
        {a}
      </div>
    </>
  );
}
