import Link, { LinkProps } from "next/link";
import { FC, PropsWithChildren } from "react";

const LinkCard: FC<PropsWithChildren<LinkProps>> = ({ children, ...props }) => {
  // ?? How to export this in a react UI component library since Link is reserved to NextJS
  return (
    <Link
      {...props}
      className={
        "flex h-full max-h-40 w-full max-w-md flex-1 items-center justify-center rounded bg-gradient-to-r from-[#485563] to-[#29323c] text-white shadow-[inset_60px_0_120px_#485563,inset_-60px_0_120px_#29323c,rgba(0,0,0,0.15)_0px_2px_8px] lg:max-h-48"
      }
    >
      {children}
    </Link>
  );
};

const Page: FC = () => {
  return (
    <div className="mx-8 flex h-[calc(100vh-var(--nav-height))] flex-col items-center justify-center gap-8 md:flex-row md:items-center md:pb-[var(--nav-height)] lg:mx-16 xl:mx-32">
      <LinkCard href="/career">Career</LinkCard>
      <LinkCard href="/projects">Projects</LinkCard>
      <LinkCard href="/courses">Courses</LinkCard>
    </div>
  );
};

export default Page;
