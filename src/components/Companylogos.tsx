import Image from "next/image";

import ingeconLogo from "../assets/images/ingeconLogo.png";
import gerdalLogo from "../assets/images/gerdalLogo.png";
import zaraLogo from "../assets/images/zaraLogo.png";
import arcosDoradosLogo from "../assets/images/arcosDoradosLogo.png";
import ambidestroLogo from "../assets/images/ambidestroLogo.png";
import gastonLogo from "../assets/images/gastonLogo.png";
import rennerLogo from "../assets/images/rennerLogo.png";
import paquetaLogo from "../assets/images/paquetaLogo.png";
import ceaLogo from "../assets/images/ceaLogo.png";

export default function LogoCarousel() {
  const logos = [
    { src: ingeconLogo, alt: "Ingecon Logo" },
    { src: gerdalLogo, alt: "Gerdal Logo" },
    { src: gastonLogo, alt: "Gaston Logo" },
    { src: zaraLogo, alt: "Zara Logo" },
    { src: arcosDoradosLogo, alt: "ArcosDorados Logo" },
    { src: ambidestroLogo, alt: "Ambidestro Logo" },
    { src: rennerLogo, alt: "Renner Logo" },
    { src: paquetaLogo, alt: "Paquetá Logo" },
    { src: ceaLogo, alt: "C&A Logo" },
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden h-22">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} className="w-20 h-auto" />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} className="w-20 h-auto" />
          </li>
        ))}
      </ul>
    </div>
  );
}
