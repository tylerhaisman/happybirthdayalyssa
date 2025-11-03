"use client";

import Image from "next/image";
import HappyBirthday from "../public/happy_birthday.png";
import Alyssa from "../public/20241229_002839073_iOS.png";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default function Home() {
  const [showImage, setShowImage] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center w-full bg-linear-to-br from-purple-300 to-purple-500 text-white min-h-screen">
      <div className="relative h-52 sm:h-screen flex flex-col justify-center items-center w-full">
        <Image src={HappyBirthday} alt="" className="w-screen"></Image>
        <h2 className="text-[26vw] text-pink-300 z-20 absolute">Alyssa</h2>
      </div>
      <button
        className="absolute bottom-4 left-0 right-0 text-xs bg-white rounded-full text-purple-500 w-fit px-2 py-1 mx-auto cursor-pointer hover:scale-105 duration-100"
        onClick={() => setShowImage(true)}
      >
        click me
      </button>
      <div className="z-30" style={{ display: showImage ? "block" : "none" }}>
        <Confetti
          className="z-40"
          gravity={0.3}
          recycle
          width={dimensions.width}
          height={dimensions.height}
        />
      </div>
      {showImage && (
        <button
          className="z-30 fixed top-4 right-4 text-xs bg-white rounded-full text-purple-500 w-fit px-2 py-1 mx-auto cursor-pointer hover:scale-105 duration-100"
          onClick={() => setShowImage(false)}
        >
          close
        </button>
      )}
      {showImage && (
        <Image
          src={Alyssa}
          alt=""
          className="fixed left-0 top-0 h-screen w-screen z-20"
        ></Image>
      )}
    </div>
  );
}
