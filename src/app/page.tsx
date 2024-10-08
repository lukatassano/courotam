import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Timeline } from "@/components/timeline";
import { timelineData } from "@/components/TimelineData";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden scrollbar-thin scrollbar-thumb-black scrollbar-track-black">
        <Hero />
        <Features />

       { /*<div className="h-[100vh] bg-black">
          <LayoutGrid cards={cards} />
        </div>*/}

        <Timeline data={timelineData} />
        <LogoTicker />
      </div>
      <Footer />
    </>
  );
}

/*export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: imgSofa1,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: imgSofa2,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: imgSofa3,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: imgSofa4,
  },
  {
    id: 5,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: img5,
  },
  {
    id: 6,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: img6,
  },
  {
    id: 7,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: img7,
  },
  {
    id: 8,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: img8,
  },
  {
    id: 9,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: img9,
  },
  {
    id: 10,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: img10,
  },
  {
    id: 11,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: img11,
  },
];
*/
