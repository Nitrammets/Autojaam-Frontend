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
      price: "38000",
      body: ["0"],
      image: "/GridExamples/308.png",
      slug: "/",
      date: "2022-04-22",
    },
    {
      id: 2,
      manufacturer: "Audi",
      model: "A6",
      price: "70000",
      body: ["2"],
      image: "/GridExamples/A6.png",
      slug: "/",
      date: "2021-12-01",
    },
    {
      id: 3,
      manufacturer: "Cupra",
      model: "Ateca",
      price: "35000",
      body: ["4"],
      image: "/GridExamples/AtecaC.png",
      slug: "/",
      date: "2021-06-07",
    },
    {
      id: 4,
      manufacturer: "Cupra",
      model: "Born",
      price: "42000",
      body: ["0"],
      image: "/GridExamples/Born.png",
      slug: "/",
      date: "2022-02-11",
    },
    {
      id: 5,
      manufacturer: "Porsche",
      model: "Cayenne",
      price: "78000",
      body: ["4"],
      image: "/GridExamples/Cayenne.png",
      slug: "/",
      date: "2022-11-11",
    },
    {
      id: 6,
      manufacturer: "Land Rover",
      model: "Defender",
      price: "80000",
      body: ["5"],
      image: "/GridExamples/Defender.png",
      slug: "/",
      date: "2021-11-01",
    },
    {
      id: 7,
      manufacturer: "Volkswagen",
      model: "Mutlivan",
      price: "46000",
      body: ["6"],
      image: "/GridExamples/Multivan.png",
      slug: "/",
      date: "2022-03-04",
    },
    {
      id: 8,
      manufacturer: "Volkswagen",
      model: "Passat",
      price: "28000",
      body: ["2"],
      image: "/GridExamples/Passat.png",
      slug: "/",
      date: "2021-01-22",
    },
    {
      id: 9,
      manufacturer: "Porsche",
      model: "Taycan",
      price: "90000",
      body: ["2", "1"],
      image: "/GridExamples/Taycan.png",
      slug: "/",
      date: "2022-06-17",
    },
    {
      id: 10,
      manufacturer: "Jaguar",
      model: "F-Type",
      price: "95000",
      body: ["3"],
      image: "/GridExamples/F-Type.png",
      slug: "/",
      date: "2022-08-19",
    },
  ];

  return {
    props: {
      posts,
    },
  };
}
