import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { ProjectsType } from "../data/projectsList";
import { CgSpinner } from "react-icons/cg";

type ProjectCardProps = {
  project: ProjectsType;
  setProjectDetail: Dispatch<SetStateAction<ProjectsType>>;
};

export default function ProjectCard({
  project,
  setProjectDetail,
}: ProjectCardProps) {
  const [showImage, setShowImage] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div
      className="flex h-[350px] w-96 cursor-pointer flex-col gap-4 rounded-xl bg-primary p-4 shadow-lg"
      onMouseEnter={() => setShowImage(false)}
      onMouseLeave={() => setShowImage(true)}
      onClick={() => setProjectDetail(project)}
    >
      <div className="flex items-center justify-center gap-8">
        <h2 className="text-center text-2xl">{project?.title}</h2>
        <Link href={project?.github} target="_blank" className="md:hidden">
          <FaGithub size={24} />
        </Link>
      </div>
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <CgSpinner size={65} className="animate-spin" />
        </div>
      ) : showImage ? (
        <div
          className="back h-56 bg-contain bg-center bg-no-repeat object-contain drop-shadow-2xl"
          style={{ backgroundImage: `url(${project?.image})` }}
        ></div>
      ) : (
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {project?.technologies.map((tech) => (
            <div
              key={tech}
              className="flex h-10 w-[140px] items-center justify-center rounded-3xl bg-secondary p-4 font-medium text-black shadow-lg"
            >
              {tech}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
