"use client";

import { Bungee } from "next/font/google";
import Image from "next/image";
import aboutMeImage from "../../../../public/images/about_me_photo.svg";

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const handleDownload = () => {
    const fileDownload = "/natalia_schmidt_curriculo.pdf";
    const link = document.createElement("a");

    link.href = fileDownload;
    link.download = "natalia_schmidt_curriculo.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="mx-10 rounded-xl bg-primary px-4 py-6 shadow-lg lg:h-[500px]">
        <h1
          className={`${bungee.className} mt-10 bg-gradient-to-r from-[#94a8b3] via-[#6c567b] to-[#452c63] bg-clip-text text-center text-2xl font-bold text-transparent md:text-6xl`}
        >
          Sobre mim
        </h1>
        <div className="xxl:w-1/2 xxl:text-xl flex flex-col gap-1 p-4 indent-4 leading-8">
          <p>Olá, me chamo Natália Schmidt!</p>
          <p>
            Desde a juventude, nutri duas grandes paixões: a veterinária e a
            tecnologia. À medida que o tempo passava, a proximidade com os
            animais guiou minha escolha pela carreira de veterinária. Após anos
            dedicados, alcancei meus objetivos nesse campo e decidi reavivar um
            antigo desejo. Assim, em busca de novos desafios, optei por explorar
            outras possibilidades e iniciar meus estudos em uma área que sempre
            despertou meu interesse: a tecnologia.
          </p>
          <p>
            Estou em constante desenvolvimento na área de tecnologia,
            aprimorando minhas habilidades através de estudos em tecnologias que
            despertam minha curiosidade, com o objetivo de evoluir
            profissionalmente. Atualmente, estou à procura de novas
            oportunidades e desafios que me permitam aplicar os conhecimentos
            adquiridos ao longo dos meus estudos. Comprometo-me a aprimorar
            minhas habilidades e enfrentar novos desafios de maneira dedicada.
          </p>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleDownload}
            className="ml-5 h-14 w-[240px] rounded-3xl bg-secondary p-4 font-medium text-black shadow-lg hover:bg-[#f78e90]"
          >
            Download currículo
          </button>
          <Image
            className="hidden w-72 rounded-full border border-b-4 border-r-2 border-primary shadow-md shadow-primary md:block"
            src={aboutMeImage}
            alt="Foto de Natália Schmidt"
            width={450}
          />
        </div>
      </div>
    </>
  );
}
