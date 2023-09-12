import Link, { LinkProps } from "next/link";
import "../styles/globals.css";
import "ui/styles.css";

import { PropsWithChildren } from "react";
import clsx from "clsx";
import { Button } from "~/components/buttons";
import Image from "next/image";

const NavbarLink = ({ children, className, ...props }: PropsWithChildren<LinkProps & { className?: string }>) => {
  return (
    <Button className={clsx("px-1 py-2 font-semibold text-gray-700 transition-colors hover:text-blue-700")} asChild>
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
        <body className={clsx("bg-background min-h-screen font-sans antialiased")}>
          <main className="h-full">
            <div className="mx-auto mt-6 grid max-w-5xl">
              <div className="flex items-center gap-4">
                <Button asChild className="flex-1">
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
                <div className="mx-auto w-max flex-1">
                  <div className="flex rounded-3xl px-2 shadow-sm">
                    <NavbarLink href="/about">About</NavbarLink>
                    <NavbarLink href="/career">Career</NavbarLink>
                    <NavbarLink href="/projects">Projects</NavbarLink>
                    <NavbarLink href="/uses">Uses</NavbarLink>
                  </div>
                </div>
                <div className="invisible flex-1"></div>
              </div>
            </div>
            <div>{children}</div>
          </main>
        </body>
      </html>
    </>
  );
}
