"use client";

import React, { useState } from "react";
import { Bungee } from "next/font/google";
import projectsList from "@/app/data/projectsList";
import ProjectCard from "@/app/Components/ProjectCard";
import ProjectDetail from "@/app/Components/ProjectDetail";

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
});

export default function Projetos() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = projectsList.slice(startIndex, endIndex);
  const [projectDetail, setProjectDetail] = useState(currentProjects[0]);

  const totalPages = Math.ceil(projectsList.length / itemsPerPage);

  console.log(projectDetail);

  return (
    <div className="mx-10">
      <h1
        className={`${bungee.className} mt-10 bg-gradient-to-r from-[#fff] via-[#6c567b] to-[#452c63] bg-clip-text text-center text-2xl font-bold text-transparent md:text-6xl`}
      >
        Projetos
      </h1>

      <div className="mt-10 flex items-start justify-center">
        <div className="flex-1 p-4">
          <div className="flex flex-wrap justify-center gap-10">
            {currentProjects.map((project) => (
              <ProjectCard
                project={project}
                key={project.id}
                setProjectDetail={setProjectDetail}
              />
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`rounded px-4 py-2 ${
                currentPage === 1
                  ? "bg-gray-300 text-black"
                  : "bg-secondary text-black"
              }`}
            >
              Anterior
            </button>

            <span>
              Página {currentPage} de {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`rounded px-4 py-2 ${
                currentPage === totalPages
                  ? "bg-gray-300 text-black"
                  : "bg-secondary text-black"
              }`}
            >
              Próximo
            </button>
          </div>
        </div>

        <div className="hidden flex-1 md:block">
          <ProjectDetail project={projectDetail} />
        </div>
      </div>
    </div>
  );
}
