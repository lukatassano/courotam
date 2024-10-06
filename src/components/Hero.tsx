"use client";
import CursorImage from "../assets/images/cursor.png";
import CourotamLogo from "../assets/images/courotam_logo.png";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import MessageImage from "../assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedGradientTextDemo } from "./animatedtext";

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#707070,#212121)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#212121] bg-[radial-gradient(closest-side,#000_82%,#707070)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative h-[50vh]">
        <div className="flex items-center justify-center">
          <motion.div className="" drag dragSnapToOrigin>
            <Image
              src={CourotamLogo}
              alt="cursor"
              height={700}
              width={700}
              // className="max-w-none"
              draggable="false"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
