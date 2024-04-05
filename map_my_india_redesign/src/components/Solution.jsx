import { HoverEffect } from "./ui/card-hover-effect";

export default function Solution() {
  return (
    <div className="max-w-5xl mx-auto px-8 flex items-center justify-center flex-col">
        <p className=" text-5xl font-bold">Solutions</p>
        <p className=" text-lg py-4">Bespoke end-to-end technology solutions
to solve critical industry challenges.</p>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Enterprise",
    description:
      "Digitally transforming your enterprise through maps, location technologies, IoT and geo-analytics.",
    link: "Learn more",
  },
  {
    title: "Automotive",
    description:
      "Creating future-ready vehicles with enhanced CX using India's best maps, automotive technologies.",
    link: "Learn more",
  },
  {
    title: "Government",
    description:
      "Improved governance, citizen engagement and infrastructure at central, state and city levels.",
    link: "Learn more",
//   },
//   {
//     title: "Meta",
//     description:
//       "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
//     link: "",
//   },
//   {
//     title: "Amazon",
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     link: "",
//   },
//   {
//     title: "Microsoft",
//     description:
//       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//     link: "",
  },
];
