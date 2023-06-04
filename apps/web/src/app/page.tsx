import Link from "next/link";
import { FC } from "react";

const Page: FC = () => {
  return (
    <div className="flex h-[calc(100vh-var(--nav-height))] flex-col justify-center gap-8 md:flex-row md:items-center md:pb-[var(--nav-height)]">
      <Link
        href="/projects"
        className="flex h-full max-h-60 w-full max-w-md flex-1 items-center justify-center rounded bg-gradient-to-r from-[#485563] to-[#29323c] text-white shadow-[inset_60px_0_120px_#485563,inset_-60px_0_120px_#29323c,rgba(0,0,0,0.15)_0px_2px_8px]"
      >
        Projets
      </Link>
    </div>
  );
};

export default Page;
