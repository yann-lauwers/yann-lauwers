import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { courses } from "./utils/constants";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const courseFromPathname = request.nextUrl.pathname.slice(1);

  const course = courses.find((course) => course.slug === courseFromPathname);

  if (!course) return;

  return NextResponse.redirect(new URL(course.redirectLink));
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export const routes = courses.map((course) => ({
  path: `/${course.slug}`,
  config: {
    middleware: ["middleware"], // Add your middleware here
  },
}));
