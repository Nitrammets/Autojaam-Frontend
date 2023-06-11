import Image from "next/image";
import Accordion from "@/components/sections/Accordion";
import Grid from "@/components/sections/Grid";
import { FilterProvider } from "@/Context/FilterContext";
import { client, getPosts, getPostsForGrid, getAccordionPosts } from "@/sanity";

export default function Home({ posts, accordionPosts }) {
  return (
    <main className="flex flex-col items-center">
      <Accordion posts={accordionPosts} />
      <div className="">
        <FilterProvider posts={posts}>
          <Grid />
        </FilterProvider>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const accordionData = await getAccordionPosts();
  console.log("Data:", accordionData);
  const data = await getPostsForGrid();
  return {
    props: {
      posts: data,
      accordionPosts: accordionData,
    },
    revalidate: 60,
  };
}
