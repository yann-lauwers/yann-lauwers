import Link from "next/link";
import { FC } from "react";

const Page: FC = () => {
  return (
    <div className="flex h-[calc(100vh-var(--nav-height))] flex-col gap-8">
      <Link
        href="/projects/internal"
        className="flex max-h-60 w-full flex-1 items-center justify-center rounded bg-gradient-to-r from-[#485563] to-[#29323c] text-white shadow-[inset_60px_0_120px_#485563,inset_-60px_0_120px_#29323c,rgba(0,0,0,0.15)_0px_2px_8px]"
      >
        Internal
      </Link>
      <Link
        href="/projects/external"
        className="flex max-h-60 w-full flex-1 items-center justify-center rounded bg-gradient-to-r from-[#485563] to-[#29323c] text-white shadow-[inset_60px_0_120px_#485563,inset_-60px_0_120px_#29323c,rgba(0,0,0,0.15)_0px_2px_8px]"
      >
        External
      </Link>
    </div>
  );
};

export default Page;
