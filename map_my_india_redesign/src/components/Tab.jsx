"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export default function Tab() {
  const tabs = [
    {
      title: "Map and Data",
      value: "Map and Data",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#da8e50] to-[#da6201]">
          <p>Map and Data</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "APIs and SDKs",
      value: "APIs and SDKs",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#da8e50] to-[#da6201]">
          <p>APIs and SDKs</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "GIS, Analytics and AI",
      value: "GIS, Analytics and AI",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#da8e50] to-[#da6201]">
          <p>GIS, Analytics and AI</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "IoT and Automation",
      value: "IoT and Automation",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#da8e50] to-[#da6201]">
          <p>IoT and Automation</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Navigation and Mobility",
      value: "Navigation and Mobility",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#da8e50] to-[#da6201]">
          <p>Navigation and Mobility</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
