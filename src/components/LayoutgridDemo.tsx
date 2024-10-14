import { LayoutGrid } from "./Layoutgrid";

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
import img12 from "../assets/images/img12.avif";
import img13 from "../assets/images/img13.webp";
import img14 from "../assets/images/img14.avif";

export function LayoutGridDemo() {
  return (
    <div className="bg-black h-full py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: img1,
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail: img2,
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail: img3,
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail: img4,
  },
  {
    id: 5,
    className: "md:col-span-2",
    thumbnail: img5,
  },
  {
    id: 6,
    className: "col-span-1",
    thumbnail: img12,
  },
  {
    id: 7,
    className: "col-span-1",
    thumbnail: img13,
  },
  {
    id: 8,
    className: "md:col-span-2",
    thumbnail: img6,
  },
  {
    id: 9,
    className: "md:col-span-2",
    thumbnail: img7,
  },
  {
    id: 10,
    className: "col-span-1",
    thumbnail: img14,
  },
  {
    id: 11,
    className: "col-span-1",
    thumbnail: img3,
  },
  {
    id: 12,
    className: "md:col-span-2",
    thumbnail: img8,
  },
  {
    id: 13,
    className: "md:col-span-2",
    thumbnail: img9,
  },
  {
    id: 14,
    className: "col-span-1",
    thumbnail: img13,
  },
  {
    id: 15,
    className: "col-span-1",
    thumbnail: img2,
  },
  {
    id: 16,
    className: "md:col-span-2",
    thumbnail: img10,
  },
  {
    id: 17,
    className: "md:col-span-2",
    thumbnail: img11,
  },
  {
    id: 18,
    className: "col-span-1",
    thumbnail: img14,
  },
];
