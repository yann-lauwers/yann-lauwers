import Image from "next/image";
import { forwardRef } from "react";

import { Typography } from "../typography";

const WhatDoILike = forwardRef<
  HTMLElement,
  React.ComponentPropsWithRef<"section">
>(function WhatDoILike({ ...props }, ref) {
  return (
    <section ref={ref} {...props}>
      <div className="sticky inset-x-0 bottom-0 z-30 h-[30vh]">
        <div className="flex h-full bg-gray-800 pl-40">
          <Typography.h1 className="self-center text-center uppercase tracking-wider text-white">
            What do I like to do ?
          </Typography.h1>
        </div>
      </div>
      <div className="sticky inset-x-0 bottom-0 z-20 h-[85vh]">
        <Image
          src="https://picsum.photos/1080/720"
          alt="Yann Lauwers dans un costume de penis en snowboard"
          className="object-cover"
          fill
        />
      </div>
      <div className="sticky inset-x-0 bottom-0 z-10 h-[85vh]">
        <Image
          src="/snowboard.webp"
          alt="Yann Lauwers dans un costume de penis en snowboard"
          className="object-cover"
          fill
        />
      </div>
      <div className="sticky inset-x-0 bottom-0 z-0 h-[85vh]">
        <Image
          src="https://picsum.photos/1080/720"
          alt="Image provenant de Picsum"
          className="object-cover"
          fill
        />
      </div>
    </section>
  );
});

export default WhatDoILike;
