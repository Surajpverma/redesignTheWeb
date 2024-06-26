import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
// import {
//   IconArrowWaveRightUp,
//   IconBoxAlignRightFilled,
//   IconBoxAlignTopLeft,
//   IconClipboardCopy,
//   IconFileBroken,
//   IconSignature,
//   IconTableColumn,
// } from "@tabler/icons-react";

  const items = [
    {
      title: "Map Data",
      description: "Location data reflecting the real world",
      header: <img src="https://www.mapmyindia.com/images/map-data-img.png" />,
      // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Geo-demographic Data",
      description: "Updated, reliable, industry data",
      header: <img src="https://www.mapmyindia.com/images/mgis_img.png" />,
      // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "RealView",
      description: "India’s very own 360° panoramic street images service.",
      header: <img src="https://www.mapmyindia.com/images/maps_map.png" />,
      // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Map Portal",
      description:
        "India's original internet mapping portal. Hyperlocal. Precise. Updated",
      header: <img src="https://www.mapmyindia.com/images/map-data-img.png" />,
      // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      header: <img src="https://www.mapmyindia.com/images/map-data-img.png" />,
      // icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Joy of Creation",
      description: "Experience the thrill of bringing ideas to life.",
      header: <img src="https://www.mapmyindia.com/images/map-data-img.png" />,
      // icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Spirit of Adventure",
      description: "Embark on exciting journeys and thrilling discoveries.",
      header: <img src="https://www.mapmyindia.com/images/map-data-img.png" />,
      // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          //   icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
