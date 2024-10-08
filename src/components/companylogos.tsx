import Image from 'next/image'

import ingeconLogo from "../assets/images/ingeconLogo.png";
import gerdalLogo from "../assets/images/gerdalLogo.png";
import zaraLogo from "../assets/images/zaraLogo.png";
import arcosDoradosLogo from "../assets/images/arcosDoradosLogo.png";
import ambidestroLogo from "../assets/images/ambidestroLogo.png";
import gastonLogo from "../assets/images/gastonLogo.png";

export default function LogoCarousel() {

  const logos = [
  { src: ingeconLogo, alt: "Ingecon Logo" },
  { src: gerdalLogo, alt: "Gerdal Logo" },
  { src: zaraLogo, alt: "Zara Logo" },
  { src: arcosDoradosLogo, alt: "ArcosDorados Logo" },
  { src: ambidestroLogo, alt: "Ambidestro Logo" },
  { src: gastonLogo, alt: "Gaston Logo" },
  ]

  return (
    <div
      className="w-full inline-flex flex-nowrap overflow-hidden h-22"
    >
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image  
              src={logo.src} 
              alt={logo.alt}
              className="w-24 h-auto"/>
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} className="w-24 h-auto"/>
          </li>
        ))}
      </ul>
    </div>
  );
}