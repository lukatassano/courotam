"use client";

import { motion } from "framer-motion";
import { Logo } from "./logo";
import bgImg from "../assets/images/bgCourotam.png"

export const Hero = () => {
  return (
    <div
      className="bg-black text-white py-[72px] sm:py-80 relative overflow-clip  bg-[url('../assets/images/bgCourotam.png')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="container relative h-[50vh]">
        <div className="flex items-center justify-center">
          <motion.div className="" drag dragSnapToOrigin>
            <Logo />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
