import Image from "next/image";
import Accordion from "@/components/sections/Accordion";
import Grid from "@/components/sections/Grid";

export default function Home({ posts }) {
  return (
    <main className="flex flex-col items-center">
      <Accordion />
      <div className="">
        <Grid posts={posts} />
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
      body: ["0", "1"],
      image: "/GridExamples/308.png",
    },
    {
      id: 2,
      manufacturer: "Audi",
      model: "A6",
      price: "30000",
      body: ["2"],
      image: "/GridExamples/A6.png",
    },
    {
      id: 3,
      manufacturer: "Cupra",
      model: "Ateca",
      price: "30000",
      body: ["4"],
      image: "/GridExamples/AtecaC.png",
    },
    {
      id: 4,
      manufacturer: "Cupra",
      model: "Born",
      price: "30000",
      body: ["0"],
      image: "/GridExamples/Born.png",
    },
    {
      id: 5,
      manufacturer: "Porsche",
      model: "Cayenne",
      price: "30000",
      body: ["4"],
      image: "/GridExamples/Cayenne.png",
    },
    {
      id: 6,
      manufacturer: "Land Rover",
      model: "Defender",
      price: "30000",
      body: ["5"],
      image: "/GridExamples/Defender.png",
    },
    {
      id: 7,
      manufacturer: "Volkswagen",
      model: "Mutlivan",
      price: "30000",
      body: ["6"],
      image: "/GridExamples/Multivan.png",
    },
    {
      id: 8,
      manufacturer: "Volkswagen",
      model: "Passat",
      price: "30000",
      body: ["2"],
      image: "/GridExamples/Passat.png",
    },
    {
      id: 9,
      manufacturer: "Porsche",
      model: "Taycan",
      price: "30000",
      body: ["3"],
      image: "/GridExamples/Taycan.png",
    },
  ];

  return {
    props: {
      posts,
    },
  };
}
