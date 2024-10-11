"use client";

import { LogoCourotamIcon } from "../components/LogoCourotamIcon";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="flex w-full py-12 bg-black text-white/60 ">
      <div className="w-full bg-zinc-900 m-4 flex py-16 px-24 items-center justify-between border-dashed/white rounded-lg transition-transform duration-200 ease-in-out hover:scale-105">
        <div className="flex items-center justify-center gap-20">
          <LogoCourotamIcon />

          <div>
            <ul className="text-white/70 text-xl font-bold flex flex-col gap-4">
              <li>
                <a
                  className="transform transition duration-300 ease-in-out hover:text-white"
                  href="/"
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

        <div className="flex">
          <ul className="flex flex-col justify-center gap-2.5">
            <h1 className="text-white font-extrabold text-4xl mb-4">Social</h1>

            <div className="flex items-center gap-6">
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
