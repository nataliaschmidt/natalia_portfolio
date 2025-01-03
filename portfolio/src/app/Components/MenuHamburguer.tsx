"use client";

import Link from "next/link";
import React, { ReactElement } from "react";

type Props = {
  handleChangeMenuHamburger: () => void;
};

export default function MenuHamburguer({
  handleChangeMenuHamburger,
}: Props): ReactElement {
  return (
    <nav className="bg-bg-light dark:bg-bg-dark absolute top-20 z-50 flex h-52 w-full flex-col items-center justify-center text-xl">
      <button
        className="text-2xl font-bold"
        onClick={handleChangeMenuHamburger}
      >
        X
      </button>
      <Link
        className="hover:text-dark-purple hover:dark:text-light-purple transition-colors"
        href="/"
      >
        Home
      </Link>
      <Link
        className="hover:text-dark-purple hover:dark:text-light-purple transition-colors"
        href="/#about-me"
      >
        Sobre Mim
      </Link>
      <Link
        className="hover:text-dark-purple hover:dark:text-light-purple transition-colors"
        href="/#skills"
      >
        Habilidades
      </Link>
      <Link
        className="hover:text-dark-purple hover:dark:text-light-purple transition-colors"
        href="/projetos"
      >
        Projetos
      </Link>
      <Link
        className="hover:text-dark-purple hover:dark:text-light-purple transition-colors"
        href="/#contacts"
      >
        Contato
      </Link>
    </nav>
  );
}
