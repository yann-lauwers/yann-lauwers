import Link from "next/link";
import { notFound } from "next/navigation";
import { FC } from "react";

type ProjectType = "personal" | "external";
const PROJECT_TYPES: ProjectType[] = ["external", "personal"];

export const PROJECTS: { id: string; title: string; description: string; technologies: string[]; url: string; type: ProjectType }[] = [
  {
    id: "pdf-merger",
    title: "PDF merger",
    description: "While at Embie, I had ...",
    technologies: ["Next.js", "TailwindCSS"],
    url: "https://carolinedebray.com/",
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
          <p className="mb-2 mt-4 line-clamp-3 text-gray-700">{project.description}</p>
          <Link className="underline" href={`/projects/${project.type}/${project.id}`}>
            See more
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
