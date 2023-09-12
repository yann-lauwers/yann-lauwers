import Link, { LinkProps } from "next/link";
import "../styles/globals.css";
import "ui/styles.css";

import { CSSProperties, PropsWithChildren } from "react";
import clsx from "clsx";
import { Button } from "~/components/buttons";
import Image from "next/image";

const NavbarLink = ({ children, className, ...props }: PropsWithChildren<LinkProps & { className?: string }>) => {
  return (
    <Button variant="navbar" size="navbar" weight="semi-bold" asChild>
      <Link {...props}>{children}</Link>
    </Button>
  );
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <html
        lang="en"
        // suppressHydrationWarning
      >
        <head>
          <title>Yann Lauwers</title>
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        </head>
        <body
          style={{ "--navmargin": "1.5rem", "--navheight": "2.5rem" } as CSSProperties}
          className={clsx("bg-background min-h-screen font-sans antialiased")}
        >
          <main className="h-full">
            <div className="fixed inset-x-0 top-0 mx-auto max-w-5xl  pt-[var(--navmargin)]">
              <div className="flex h-[var(--navheight)] items-center  gap-4">
                <Button asChild unstyled className="flex-1">
                  <Link href="/">
                    <Image
                      src="https://picsum.photos/64/64"
                      className="aspect-square h-10 w-10 rounded-full"
                      alt=""
                      width={48}
                      height={48}
                    />
                  </Link>
                </Button>
                <div className="flex-1">
                  <div className="mx-auto flex w-max rounded-3xl bg-white px-2 shadow-sm">
                    <NavbarLink href="/about">About</NavbarLink>
                    <NavbarLink href="/career">Career</NavbarLink>
                    <NavbarLink href="/projects">Projects</NavbarLink>
                    <NavbarLink href="/uses">Uses</NavbarLink>
                  </div>
                </div>
                <div className="invisible flex-1"></div>
              </div>
            </div>
            <div className="flex h-full items-center justify-center py-[calc(var(--navmargin)_+_var(--navheight))]">
              <p>This website is under construction</p>
            </div>
            {/* <div>{children}</div> */}
          </main>
        </body>
      </html>
    </>
  );
}
