"use client";

import { LogoCourotamIcon } from "../components/LogoCourotamIcon";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="flex flex-col w-full bg-black text-white/60 ">
      <div className="flex flex-col md:flex-row gap-10 bg-zinc-900 md:py-12 py-8 xl:py-20 px-4 md:px-8 xl:px-40 items-center justify-between border-dashed/white rounded-lg">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 xl:gap-20">
          <LogoCourotamIcon />

          <div>
            <ul className="text-white/70 text-sm md:text-base lg:text-lg xl:text-2xl font-bold flex flex-row lg:flex-col gap-4 xl:gap-6">
              <li>
                <a
                  className="transform transition duration-300 ease-in-out hover:text-white"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="transform transition duration-300 ease-in-out hover:text-white"
                  href="#about"
                >
                  Nosso trabalho
                </a>
              </li>
              <li>
                <a
                  className="transform transition duration-300 ease-in-out hover:text-white"
                  href="#timeline"
                >
                  Linha do tempo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col">
          <ul className="flex flex-col items-center md:items-start justify-center gap-2.5 md:gap-6">
            <h1 className="text-white items-center justify-center font-extrabold text-2xl md:text-3xl xl:text-4xl mb-4">Social</h1>

            <div className="flex items-center gap-6 xl:gap-10">
              <li>
                <a
                  href="mailto:courotam@gmail.com?subject=Proposta%20de%20Negócio&body=Olá,%20gostaria%20de%20discutir%20uma%20proposta%20de%20negócio.%0A%0AFico%20no%20aguardo%20da%20resposta."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdOutlineEmail className="text-white h-10 w-10 transform transition duration-300 ease-in-out hover:scale-110" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5551981140155?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-white h-10 w-10 transform transition duration-300 ease-in-out hover:scale-110" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/courotam" target="_blank" rel="noopener noreferrer">
                  <FiInstagram className="text-white h-9 w-9 transform transition duration-300 ease-in-out hover:scale-110" />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};
