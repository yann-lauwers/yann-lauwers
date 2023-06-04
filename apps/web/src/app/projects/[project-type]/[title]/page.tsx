"use client";
import { useParams } from "next/navigation";
import { FC } from "react";
import { PROJECTS } from "../page";
import Link from "next/link";

const Page: FC = () => {
  const params = useParams();

  const project = PROJECTS.find((project) => project.id === params?.title);

  if (!project) return null;

  return (
    <div>
      <div className="mx-auto max-w-4xl px-8">
        <h3 className="mb-1 text-2xl font-medium">Description</h3>
        <p className="mb-20 max-w-prose text-gray-700">{project.description}</p>
      </div>
      <div className="mx-auto max-w-6xl">
        <iframe style={{ height: "640px", width: "100%" }} src={project.url} title={project.title}></iframe>
        <div className="mx-2 mt-2 flex justify-between">
          <p>Made with {project.technologies.join(", ")}</p>
          <Link className="text-blue-500 underline" href={project.url}>
            {project.url}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
