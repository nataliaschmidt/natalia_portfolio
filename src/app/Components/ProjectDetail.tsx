import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { ProjectsType } from "../data/projectsList";

type ProjectDetailProps = {
  project: ProjectsType;
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <>
      <div className="flex items-center justify-center gap-8">
        <h2 className="text-center text-4xl">{project?.title}</h2>
        <Link href={project?.github} target="_blank">
          <FaGithub size={32} />
        </Link>
      </div>
      {project?.isVIdeo && (
        <video
          src={project?.video as string}
          className="w-full rounded-3xl p-4 md:h-80 lg:h-96"
          controls
        />
      )}
      <p className="mt-10 indent-10">{project?.description}</p>
    </>
  );
}
