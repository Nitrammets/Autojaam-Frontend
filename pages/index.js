import Image from "next/image";
import Accordion from "@/components/sections/Accordion";
import Grid from "@/components/sections/Grid";
import { FilterProvider } from "@/Context/FilterContext";
import { client, getPosts, getPostsForGrid, getAccordionPosts } from "@/sanity";

import Head from "next/head";

export default function Home({ posts, accordionPosts }) {
  return (
    <>
      <Head>
        <title>Autojaam.ee</title>
        <meta
          name="description"
          content="Autojaam koondab huvilistele kokku kõik vajaliku autodest, et ostjatele autovalik lihtsamaks muuta. Loe lähemalt meie proovisõitude kogemustest."
        />
      </Head>
      <main className="flex flex-col items-center">
        <Accordion posts={accordionPosts} />
        <div className="">
          <FilterProvider posts={posts}>
            <Grid />
          </FilterProvider>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const accordionData = await getAccordionPosts();

  const data = await getPostsForGrid();
  return {
    props: {
      posts: data,
      accordionPosts: accordionData,
    },
    revalidate: 60,
  };
}
