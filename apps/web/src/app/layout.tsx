// import Head from "next/head";
import Link from "next/link";
import "../styles/globals.css";
import "ui/styles.css";

import { PropsWithChildren } from "react";
import clsx from "clsx";

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
            <div className="h-screen p-4">
              <div className="h-[var(--nav-height)]">
                <Link href="/">Homee</Link>
              </div>
              {children}
            </div>
          </main>
        </body>
      </html>
    </>
  );
}
