"use client";

import { LogoWhatsapp } from "./LogoWhatsapp";
import { LogoEmail } from "./LogoEmail";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-10 sm:flex-col sm:justify-between">
          <ul className="flex justify-between gap-2.5">
            <li>
              <LogoWhatsapp />
            </li>
            <li>courotam</li>
            <li>
              <LogoEmail />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};