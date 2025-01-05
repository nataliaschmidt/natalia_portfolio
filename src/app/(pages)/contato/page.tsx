import React from "react";
import { Bungee } from "next/font/google";
import FormContact from "@/app/Components/FormContact";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Avatar from "../../../../public/images/avatar.svg";
import Image from "next/image";
import Link from "next/link";

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
});

export default function Contato() {
  return (
    <div className="mx-10">
      <h1
        className={`${bungee.className} mt-10 bg-gradient-to-r from-[#fff] via-[#6c567b] to-[#452c63] bg-clip-text text-center text-2xl font-bold text-transparent md:text-6xl`}
      >
        Contato
      </h1>
      <div className="mt-10 flex items-end justify-center gap-20">
        <Image
          className="absolute bottom-0 left-20 hidden w-72 md:block xl:w-96"
          src={Avatar}
          alt="Foto de Natália Schmidt"
          width={450}
        />
        <FormContact />
      </div>
      <div className="mt-8 flex justify-center gap-8 text-5xl md:text-6xl">
        <Link
          href="https://www.linkedin.com/in/nataliakschmidt/"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link href="https://github.com/nataliaschmidt" target="_blank">
          <FaGithub />
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=5551981554523"
          target="_blank"
        >
          <FaWhatsapp />
        </Link>
      </div>
    </div>
  );
}
