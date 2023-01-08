import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

import Section1 from "../components/homepage/section1";
import { Section2Container as SecondSectionContainer } from "../components/homepage/section2";
import useOnScreen from "../hooks/use-on-screen";

const SecondSection = dynamic(() => import("../components/homepage/section2"));

export default function Home() {
  // const [isClient, setIsClient] = useState(false);
  const section2Ref = useRef<HTMLParagraphElement | null>(null);
  const Section2RefValue = useOnScreen(section2Ref);
  const [isSection2Visible, setIsSection2Visible] = useState(false);

  useEffect(() => {
    if (!isSection2Visible) {
      setIsSection2Visible(Section2RefValue);
    }
  }, [Section2RefValue, isSection2Visible]);

  // useEffect(() => {
  //   // setTimeout(() =>
  //   setIsClient(true);
  //   // , 1000)
  // }, []);

  return (
    <>
      <Head>
        <title>Yann Lauwers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* {!isClient ? null : ( */}
      <main className="z-0 h-full">
        <div className="h-screen snap-y snap-mandatory overflow-scroll">
          <Section1 />
          <SecondSectionContainer ref={section2Ref}>
            {isSection2Visible && <SecondSection />}
          </SecondSectionContainer>
          <div className="h-screen snap-center snap-always overflow-scroll">
            {/* Everything else which should scroll normally */}
            <div className="h-screen">End of scroll snap</div>
            <div className="h-screen">test</div>
          </div>
        </div>
      </main>
      {/* )} */}
    </>
  );
}
