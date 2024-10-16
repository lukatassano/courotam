"use client";

import Image, { StaticImageData } from "next/image";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  images?: StaticImageData[];
}

export const TimelineSettings = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      id="timeline"
      className="w-full bg-black dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-10 md:px-8 lg:px-10">
        <h2 className="text-lg font-bold md:text-4xl mb-4 text-white dark:text-white max-w-4xl">
          Nossa história
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-start pt-10 md:pt-20 md:gap-10"
          >
            <div className="sticky flex flex-col top-40 items-center justify-center md:items-start self-start w-full lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="text-sm md:text-2xl flex flex-col sm:pl-4 md:pl-20 md:w-max font-bold text-neutral-100 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="pl-2 pr-4 md:pl-4 w-full flex flex-row items-start"> 
              <div
                className={`flex flex-col lg:flex-row gap-4 lg:gap-16 m-10 justify-center`}
              >
                <div className="max-w-2xl pl-4 md:w-full text-start md:text-lg lg:text-xl flex flex-col">
                  {item.content}
                </div>

                {item.images && item.images.length > 0 && (
                  <div className="flex flex-col gap-4 w-full md:w-72">
                    {item.images.map((imgSrc, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="mt-4 md:mt-0 md:ml-4 w-full"
                      >
                        <Image
                          src={imgSrc}
                          alt={`${item.title} - imagem ${imgIndex + 1}`}
                          className="w-96 h-44 rounded-md shadow-md transition-transform duration-300 ease-in-out hover:scale-150"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[4px] bg-white rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
