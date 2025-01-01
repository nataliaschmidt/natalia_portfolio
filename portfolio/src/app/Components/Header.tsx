"use client";

import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";
import MenuHamburguer from "./MenuHamburguer";
import ToggleThemeButton from "./ToggleThemeButton";


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
    <header className="bg-red h-24 w-full flex justify-around items-center gap-10">
      <div>Natália Schmidt</div>
      <div ref={menuRef} className=" relative md:hidden flex">
        <button onClick={handleChangeMenuHamburger}>
          <IoMenuSharp className="text-[34px] text-bg-dark dark:text-bg-light" />
        </button>
      </div>
      {menuHamburguer ? (
        <MenuHamburguer handleChangeMenuHamburger={handleChangeMenuHamburger} />
      ) : null}

      <nav className="gap-8 hidden justify-center items-center md:flex lg:ml-7 ">
        <Link
          className="hover:text-dark-purple hover:dark:text-light-purple transition-colors"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover:text-dark-purple hover:dark:text-light-purple transition-colors"
          href=""
        >
          Sobre Mim
        </Link>
        <Link
          className="hover:text-dark-purple hover:dark:text-light-purple transition-colors"
          href="/"
        >
          Projetos
        </Link>
        <Link
          className="hover:text-dark-purple hover:dark:text-light-purple transition-colors"
          href=""
        >
          Contato
        </Link>
      </nav>

      <ToggleThemeButton />
    </header>
  );
}
