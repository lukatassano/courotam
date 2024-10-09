"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import Image, { StaticImageData } from "next/image";

type Card = {
  id: number;
  className: string;
  thumbnail: string | StaticImageData;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setSelected(selected?.id === card.id ? null : card);
  };

  const handleOutsideClick = () => {
    setSelected(null);
  };

  return (
    <div
      className="w-full h-full p-12 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative"
      onClick={handleOutsideClick}
    >
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className)}>
          <motion.div
            onClick={(e) => {
              e.stopPropagation();
              handleClick(card);
            }}
            className={cn(
              "relative overflow-hidden bg-white rounded-xl h-full w-full cursor-pointer"
            )}
            layoutId={`card-${card.id}`}
            animate={
              selected?.id === card.id
                ? { scale: 1.2, zIndex: 50 }
                : { scale: 1, zIndex: 1 }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <div className="relative w-full h-64">
      {typeof card.thumbnail !== "string" ? (
        <Image
          src={card.thumbnail}
          layout="fill"
          className="object-cover object-center transition duration-200"
          alt="thumbnail"
        />
      ) : (
        <motion.img
          layoutId={`image-${card.id}-image`}
          src={card.thumbnail}
          className="object-cover object-top transition duration-200 w-full h-full"
          alt="thumbnail"
        />
      )}
    </div>
  );
};
