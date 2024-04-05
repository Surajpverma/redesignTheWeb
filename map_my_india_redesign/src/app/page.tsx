"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Landing from "@/components/Landing";
import Globe from '@/components/Globe';
import Header from '@/components/Header'

export default function Home() {
 
  return (
    <>
    <Header/>
      <Landing />
      <Globe />
    </>
  );
}
