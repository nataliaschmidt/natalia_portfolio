"use client";

import { Bungee } from "next/font/google";
import Image from "next/image";
import DevWithCat from "../../public/images/dev_with_cat.svg";
import Link from "next/link";

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
      <div className="relative mx-10 h-[500px] rounded-xl bg-primary px-4 py-6 shadow-lg">
        <h1
          className={`${bungee.className} mt-10 bg-gradient-to-r from-[#94a8b3] via-[#6c567b] to-[#452c63] bg-clip-text text-center text-2xl font-bold text-transparent md:text-6xl`}
        >
          Desenvolvedora {"\n"} Web
        </h1>
        <div className="txt-animado mt-10 text-lg font-semibold lg:ml-10 lg:text-4xl">
          Desenvolvedora <span></span>
        </div>
        <Link
          href="www.google.com"
          className="absolute bottom-20 left-1/2 w-[240px] -translate-x-1/2 transform rounded-3xl bg-[#fc9d9e] p-4 font-medium text-black shadow-lg hover:bg-[#f78e90] md:left-44"
        >
          A inovação começa aqui!
        </Link>
      </div>
      <Image
        className="absolute right-5 top-1/2 hidden -translate-y-1/2 transform md:block xl:top-2/3 xl:w-[550px]"
        src={DevWithCat}
        alt="Imagem de uma desenvolvedora com seu gato preto"
        width={400}
      />
    </>
  );
}
