import Link from "next/link";
import { notFound } from "next/navigation";
import { FC } from "react";

type ProjectType = "personal" | "external";
const PROJECT_TYPES: ProjectType[] = ["external", "personal"];

export const PROJECTS: { id: string; title: string; description: string; technologies: string[]; url: string; type: ProjectType }[] = [
  {
    id: "game-of-life",
    title: "Game of Life",
    description:
      "While at Embie, I had the opportunity to improve my skills in React and Next.js. I decided to improve to skills by creating a Game of Life. It taught me a lot about react's limitation in rendering and how to optimize it. I've had the opportunity to better understand the rendering cycle of React and its refs.",
    technologies: ["Next.js", "TailwindCSS"],
    url: "https://game-of-life-pink.vercel.app/",
    type: "personal",
  },
  {
    id: "pdf-merge",
    title: "PDF merge",
    description:
      "My first personal project while working at Embie was this PDF merge. The goal is to merge many PDF files into one. I learned a little bit about how PDF files work and their structure. It was a fun project to work on and I learned a lot about Next.js and TailwindCSS.",
    technologies: ["Next.js", "TailwindCSS", "pdf-merger-js"],
    url: "https://pdf-merge.vercel.app/",
    type: "personal",
  },
  {
    id: "caroline-debray",
    title: "Caroline Debray",
    description:
      "Caroline Debray is a Belgian artiste who writes poems and paints about it. She decided to show off her paints and poems to the world in 2021 through a customized website.",
    technologies: ["Next.js", "TailwindCSS", "Cloudinary", "Airtable"],
    url: "https://carolinedebray.com/",
    type: "external",
  },
];

export async function generateStaticParams() {
  return PROJECT_TYPES.map((projectType) => ({
    "project-type": projectType,
  }));
}

const Page: FC = ({ params }: { params: { "project-type": ProjectType } }) => {
  const projectType = params?.["project-type"];

  // Route slug is not valid -> return null for now
  if (!PROJECT_TYPES.includes(projectType)) notFound();

  const projects = PROJECTS.filter((project) => project.type === projectType);

  return (
    <div className="mx-auto flex max-w-md flex-col gap-x-8 gap-y-32 px-8 md:grid md:max-w-3xl md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:max-w-4xl">
      {projects.map((project) => (
        <div key={project.id}>
          <h2 className="text-2xl font-medium">{project.title}</h2>
          {/* TODO: create a thumbnail for this card -> ask on fiverr */}
          <div className="mt-2 flex h-40 items-center justify-center rounded-sm bg-red-50">{project.title}</div>
          <p className="mb-2 mt-4 line-clamp-2 text-gray-700">{project.description}</p>
          <Link className="underline" href={`/projects/${project.type}/${project.id}`}>
            See more
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
