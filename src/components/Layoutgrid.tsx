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
      className="w-full h-full p-12 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-8 relative"
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
              "relative overflow-hidden bg-white rounded-xl h-full w-full cursor-pointer",
              selected?.id === card.id && "z-50"
            )}
            layoutId={`card-${card.id}`}
            animate={
              selected?.id === card.id
                ? { scale: 1.5, zIndex: 50 }
                : { scale: 1, zIndex: 1 }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              position: selected?.id === card.id ? "relative" : "static", 
            }}
          >
            <ImageComponent card={card} isSelected={selected?.id === card.id} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({
  card,
  isSelected,
}: {
  card: Card;
  isSelected: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative w-full",
        isSelected ? "h-[400px]" : "h-64"
      )}
    >
      {typeof card.thumbnail !== "string" ? (
        <Image
          src={card.thumbnail}
          layout="fill"
          className={cn(
            "transition duration-200",
            isSelected ? "object-cover" : "object-cover"
          )}
          alt="thumbnail"
        />
      ) : (
        <motion.img
          layoutId={`image-${card.id}-image`}
          src={card.thumbnail}
          className={cn(
            "transition duration-200 w-full h-full",
            isSelected ? "object-cover" : "object-cover"
          )}
          alt="thumbnail"
        />
      )}
    </div>
  );
};
