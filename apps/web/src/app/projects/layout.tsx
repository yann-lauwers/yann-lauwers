"use client";
import { useParams } from "next/navigation";
import { PropsWithChildren } from "react";
import { PROJECTS } from "./[project-type]/page";

export default function ProjectsLayout({ children }: PropsWithChildren) {
  const params = useParams();
  const projectId = params?.title;
  const projectTitle = PROJECTS.find((project) => project.id === projectId)?.title;

  return (
    <div className="pb-32">
      <h1 className="mb-32 mt-10 text-center text-6xl">{projectTitle ?? "Projects"}</h1>
      {children}
    </div>
  );
}
