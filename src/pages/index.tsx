import Head from "next/head";
import { useEffect, useRef, useState } from "react";

import RotativeBackgroundWithDescription from "../components/homepage/section1";
import WhatDoILike from "../components/homepage/whatDoILike";
import useOnScreen from "../hooks/use-on-screen";

export default function Home() {
  // What do I like
  const {
    ref: beforeWhatDoILikeRef,
    entry: isWhatDoILikeVisible,
    isNextDomElVisible,
  } = useOnScreen<HTMLDivElement>({ threshold: 0 });

  const {
    ref: beforeIndigoRef,
    entry: isIndigoVisible,
    isNextDomElVisible: isNextDomElVisible2,
  } = useOnScreen<HTMLDivElement>({ threshold: 0 });

  return (
    <>
      <Head>
        <title>Yann Lauwers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="z-0 h-full">
        <RotativeBackgroundWithDescription />
        <div ref={beforeWhatDoILikeRef} className="h-screen bg-violet-200">
          Violet
        </div>
        {isNextDomElVisible && <WhatDoILike ref={beforeIndigoRef} />}
        {isNextDomElVisible2 && (
          <div className="h-screen bg-indigo-200">Indigo</div>
        )}
      </main>
    </>
  );
}
