import Image from "next/image";
import Accordion from "@/components/sections/Accordion";
import Grid from "@/components/sections/Grid";
import { FilterProvider } from "@/Context/FilterContext";

export default function Home({ posts }) {
  return (
    <main className="flex flex-col items-center">
      <Accordion />
      <div className="">
        <FilterProvider posts={posts}>
          <Grid />
        </FilterProvider>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  // Fetch your data from an API or any other source
  const posts = [
    {
      id: 1,
      manufacturer: "Peugeot",
      model: "308",
      price: "30000",
      body: ["0"],
      image: "/GridExamples/308.png",
      slug: "/",
    },
    {
      id: 2,
      manufacturer: "Audi",
      model: "A6",
      price: "30000",
      body: ["2"],
      image: "/GridExamples/A6.png",
      slug: "/",
    },
    {
      id: 3,
      manufacturer: "Cupra",
      model: "Ateca",
      price: "30000",
      body: ["4"],
      image: "/GridExamples/AtecaC.png",
      slug: "/",
    },
    {
      id: 4,
      manufacturer: "Cupra",
      model: "Born",
      price: "30000",
      body: ["0"],
      image: "/GridExamples/Born.png",
      slug: "/",
    },
    {
      id: 5,
      manufacturer: "Porsche",
      model: "Cayenne",
      price: "30000",
      body: ["4"],
      image: "/GridExamples/Cayenne.png",
      slug: "/",
    },
    {
      id: 6,
      manufacturer: "Land Rover",
      model: "Defender",
      price: "30000",
      body: ["5"],
      image: "/GridExamples/Defender.png",
      slug: "/",
    },
    {
      id: 7,
      manufacturer: "Volkswagen",
      model: "Mutlivan",
      price: "30000",
      body: ["6"],
      image: "/GridExamples/Multivan.png",
      slug: "/",
    },
    {
      id: 8,
      manufacturer: "Volkswagen",
      model: "Passat",
      price: "30000",
      body: ["2"],
      image: "/GridExamples/Passat.png",
      slug: "/",
    },
    {
      id: 9,
      manufacturer: "Porsche",
      model: "Taycan",
      price: "30000",
      body: ["2", "1"],
      image: "/GridExamples/Taycan.png",
      slug: "/",
    },
    {
      id: 10,
      manufacturer: "Jaguar",
      model: "F-Type",
      price: "30000",
      body: ["3"],
      image: "/GridExamples/F-Type.png",
      slug: "/",
    },
  ];

  return {
    props: {
      posts,
    },
  };
}
