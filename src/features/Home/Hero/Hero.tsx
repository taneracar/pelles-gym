import MainWrapper from "@/components/wrappers/main-wrapper";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="w-full h-fit bg-bej">
      <MainWrapper>
        <div className="flex justify-between h-fit">
          <div className="w-1/2 flex items-center justify-center">
            <div className="flex flex-col items-start h-fit justify-center gap-5">
              <h1 className="text-[100px] font-bold text-dark leading-25">
                Reach Your Goals
              </h1>
              <p className="w-1/2 text-2xl font-semibold text-dark mt-2 ">
                Workout Routines, Nutrition Plans, and Community Support
              </p>
              <button className="mt-5 bg-primary text-bej rounded-xl w-1/4 h-12 text-2xl font-semibold cursor-pointer hover:bg-dark hover:text-bej transition-all duration-300 ">
                Set Your Goals
              </button>
            </div>
          </div>

          <div>
            <Image src="/hero.jpg" alt="hero" width={500} height={500} />
          </div>
        </div>
      </MainWrapper>
    </div>
  );
}
