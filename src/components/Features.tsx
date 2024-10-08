import { ParallaxScroll } from "./parallax-scroll"
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/imgSofa5.png";
import img6 from "../assets/images/imgSofa6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";
import img9 from "../assets/images/img9.png";
import img10 from "../assets/images/img10.png";
import img11 from "../assets/images/img11.png";

export const Features = () => {
  return (

    <div className=" text-white py-[100px] sm:py-40  bg-gradient-to-t from-black to-black">

      <div className="container p-1">
        <h2 className=" text-center py-10 font-bold text-3xl sm:text-4xl tracking-tighter">Soluções em estofados que elevam o padrão do seu negócio / casa </h2>
        <ParallaxScroll images={images} className="bg-black"/>
      </div>

    </div>
  )
}

const images = [
  img1.src,
  img2.src,
  img3.src,
  img4.src,
  img5.src,
  img6.src,
  img7.src,
  img8.src,
  img9.src,
  img10.src,
  img11.src,
  img1.src,
  img2.src,
  img3.src,
  img4.src,
  img5.src,
  img6.src,
];