"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const getDiagonal = (height: number, width: number) => {
  return Math.sqrt(Math.pow(height, 2) + Math.pow(width, 2));
};

const Section1 = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [text, setText] = useState("I'm Yann");

  const isRotating = height !== 0 && width !== 0;

  // https://github.com/react-component/overflow/issues/6#issuecomment-819215239
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useEffect(() => {
    let interval: any;
    let timer: any;

    if (isRotating) {
      timer = setTimeout(() => {
        setText((prevState) =>
          prevState === "I'm Yann" ? "I'm a fullstack developer" : "I'm Yann"
        );

        interval = setInterval(() => {
          setText((prevState) =>
            prevState === "I'm Yann" ? "I'm a fullstack developer" : "I'm Yann"
          );
        }, 5000);
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [isRotating]);

  useIsomorphicLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
      setWidth(ref.current.clientWidth);
    }
  }, []);

  return (
    <div
      className="relative hidden h-screen snap-center snap-always overflow-hidden lg:block"
      ref={ref}
    >
      <div
        style={{
          height: `${getDiagonal(height, width)}px`,
          width: `${getDiagonal(height, width)}px`,
        }}
        className="rotate absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(var(--tw-gradient-stops))] from-green-700 via-green-200/50 to-white duration-500"
      />
      <div className="relative z-10 flex h-full w-full">
        <div className="mb-28 ml-28 flex h-full flex-col items-start justify-center">
          <h1 className="text-5xl font-bold text-green-900 xl:text-6xl">Hey</h1>
          <h1 className="text-5xl text-red-500 xl:text-6xl">{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default Section1;
