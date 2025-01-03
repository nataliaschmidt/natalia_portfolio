import React from 'react'
import { Bungee } from "next/font/google";
const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
});
export default function Projetos() {
  return (
    <div className='mx-10'>
           <h1
        className={`${bungee.className} mt-10 bg-gradient-to-r from-[#fff] via-[#6c567b] to-[#452c63] bg-clip-text text-center text-2xl font-bold text-transparent md:text-6xl`}
      >
        Projetos
      </h1>
    </div>
  )
}
