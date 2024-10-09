"use client";

import { motion } from "framer-motion";
import { LogoCourotam } from "./LogoCourotam";

export const Hero = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-80 relative overflow-clip  bg-[url('../assets/images/bgCourotam.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="container relative h-[50vh]">
        <div className="flex items-center justify-center">
          <motion.div className="" drag dragSnapToOrigin>
            <LogoCourotam />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};