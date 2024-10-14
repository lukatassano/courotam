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
    { src: ingeconLogo, alt: "Ingecon Logo", height: 80 },
    { src: gerdalLogo, alt: "Gerdal Logo", height: 50 },
    { src: gastonLogo, alt: "Gaston Logo", height: 60 },
    { src: zaraLogo, alt: "Zara Logo", height: 55 },
    { src: arcosDoradosLogo, alt: "Arcos Dorados Logo", height: 90 },
    { src: ambidestroLogo, alt: "Ambidestro Logo", height: 80 },
    { src: rennerLogo, alt: "Renner Logo", height: 90 },
    { src: paquetaLogo, alt: "Paquetá Logo", height: 240 },
    { src: ceaLogo, alt: "C&A Logo", height: 80 },
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} height={logo.height} />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} height={logo.height} />
          </li>
        ))}
      </ul>
    </div>
  );
}
