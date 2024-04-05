"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Landing from "@/components/Landing";
import Globe from '@/components/Globe';
import Header from '@/components/Header'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { cn } from "@/utils/cn";
import Tab from "@/components/Tab";
import BentoGrid from "@/components/BentoGrid";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import Solution from "@/components/Solution";

export default function Home() {
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
  return (
    <>
      <Header />

      <Slider {...settings}>
        <Globe />
        <div
          className={cn(
            "overflow-hidden h-full w-full relative flex items-center justify-center"
          )}
          style={{
            perspective: "1000px",
          }}
        >
          <div className={cn("absolute inset-0 bg-black/60 z-40")} />
          <motion.img
            src={"https://about.mappls.com/images/ramayan-bg-hero.jpg"}
            initial="initial"
            animate="visible"
            className="image h-full w-full absolute inset-0 object-cover object-center"
          />
          <motion.div className="z-50 flex flex-col justify-center items-center h-[50rem]">
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 z-50">
              The Ramayan Maps a journey on canvas
            </motion.p>

            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-black mx-auto text-center rounded-full relative mt-4">
              <span>Join now →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </motion.div>
        </div>
      </Slider>
      <div className="max-w-5xl mx-auto px-8 flex items-center justify-center flex-col mt-20">
        <p className=" text-5xl font-bold">Products</p>
        <p className=" text-lg py-4">
          Browse through India’s most comprehensive suite of mapping, location
          and IoT solutions.
        </p>
      </div>
      <Tab />
      <Solution />
    </>
  );
}
