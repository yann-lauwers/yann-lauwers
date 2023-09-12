import Link from "next/link";
import { FC } from "react";

const Page: FC = () => {
  return (
    <div className="text-center">
      <h2 className="mb-2 text-xl font-bold">404 NOT FOUND</h2>
      <p className="">How did you get there ??</p>
      <p className="mb-4">Seems like you're on the wrong page, let's go somewhere else</p>
      <Link href="/projects" className="underline">
        Home
      </Link>
    </div>
  );
};

export default Page;
