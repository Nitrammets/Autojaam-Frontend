import Image from "next/image";
import Accordion from "@/components/sections/Accordion";
import Grid from "@/components/sections/Grid";
import { FilterProvider } from "@/Context/FilterContext";
import { client, getPosts, getPostsForGrid } from "@/sanity";

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
  const data = await getPostsForGrid();
  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  };
}
