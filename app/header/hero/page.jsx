import React from "react";
import { Bonheur_Royale } from "next/font/google";
import Image from "next/image";
const bonheurRoyale = Bonheur_Royale({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  return (
    <div className={bonheurRoyale.className}>
      <div className="relative  max-w-[1200px] mx-auto px-[20px] flex justify-between text-[#F9E0D9] mt-[40px]">
        <div className="relative z-10">
        <h2 className="text-[60px] tracking-[6px] max-sm:text-[40px]">Chocolate Bars</h2>
        <h1 className="text-[170px] tracking-[10px] leading-[200px] max-sm:text-[100px] max-sm:tracking-[6px]">Delicious</h1>
        <button className="w-[180px] h-[60px] text-[28px] border bg-gradient-to-r from-[#E2603B] via-[#89393B] rounded-tr-[60px] rounded-bl-[60px] hover:bg-[#E2603B] duration-300 cursor-pointer hover:border-black">Shop Now</button>
        </div>
        <Image
          src="/image/hero-img1.png"
          alt="My photo"
          width={590}
          height={400}
          className="absolute top-[-140px] right-0 z-0 min-h-[100vh]"
        />
      </div>
    </div>
  );
};

export default Hero;
