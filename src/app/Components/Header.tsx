"use client";

import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Meow_Script } from "next/font/google";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";
import MenuHamburguer from "./MenuHamburguer";
import ToggleThemeButton from "./ToggleThemeButton";
import { IoPawSharp } from "react-icons/io5";

const meowScript = Meow_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function Header(): ReactElement {
  const [menuHamburguer, setMenuHamburguer] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const handleChangeMenuHamburger = () => {
    setMenuHamburguer(!menuHamburguer);
  };

  const closeMenu = useCallback(
    (e: MouseEvent) => {
      if (
        menuRef.current &&
        e.target instanceof Node &&
        !menuRef.current.contains(e.target) &&
        menuHamburguer
      ) {
        setMenuHamburguer(false);
      }
    },
    [menuHamburguer],
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      closeMenu(e);
    };

    if (menuHamburguer) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuHamburguer, closeMenu]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize((prevSize) => ({
        ...prevSize,
        width: window.innerWidth,
        height: window.innerHeight,
      }));
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMenuHamburguer(false);
  }, [windowSize]);

  return (
    <header className="flex h-24 w-full justify-between px-10">
      <div className="flex items-center gap-2">
        <IoPawSharp size={32} className="text-primary" />
        <span className={`${meowScript.className} text-4xl`}>
          Natália Schmidt
        </span>
      </div>

      <nav className="absolute left-1/2 top-10 hidden -translate-x-1/2 transform items-center justify-center gap-8 md:flex lg:ml-7">
        <Link className="transition-colors hover:text-primary" href="/">
          Home
        </Link>
        <Link className="transition-colors hover:text-primary" href="/sobre">
          Sobre Mim
        </Link>
        <Link className="transition-colors hover:text-primary" href="/projetos">
          Projetos
        </Link>
        <Link className="transition-colors hover:text-primary" href="/contato">
          Contato
        </Link>
      </nav>

      <ToggleThemeButton />
    </header>
  );
}

{
  /* <div ref={menuRef} className="relative flex md:hidden">
        <button onClick={handleChangeMenuHamburger}>
          <IoMenuSharp className="text-bg-dark dark:text-bg-light text-[34px]" />
        </button>
      </div>
      {menuHamburguer ? (
        <MenuHamburguer handleChangeMenuHamburger={handleChangeMenuHamburger} />
      ) : null} */
}
