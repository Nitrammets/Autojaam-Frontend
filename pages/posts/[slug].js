import React from "react";
import { getAllSlugs, getPostBySlug } from "@/sanity";
import { PortableText } from "@portabletext/react";
import Paragraph from "@/components/PortableText/Paragraph";
import DividerHeader from "@/components/Utility/DividerHeader";
import SlideShow from "@/components/Utility/SlideShow";
import Image from "next/image";

function Post({ post }) {
  if (!post || !post.cover_img) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center mb-32">
      <style>
        {`
            body {
              background-image: linear-gradient(to right, #FFFFFF 0%, #F1F1F1 33%, #F1F1F1 67%, #FFFFFF 100%);
            }
              .video-container {
                position: relative;
                padding-bottom: 56.25%; 
                height: 0;
                overflow: hidden;
              }
            `}
      </style>
      <div
        className="h-[30vh] bg-cover sm:h-[54vh] md:bg-contain sm:bg-left lg:h-screen lg:bg-cover"
        style={{
          backgroundImage: `url(${post.cover_img ? post.cover_img : ""})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-11/12 lg:w-10/12 2xl:w-8/12 mx-auto text-lg">
        <div className="text-black text-center mt-12">
          <Paragraph value={post.intro ? post.intro : ""} />
        </div>
        {post.youtube_id && (
          <div className="h-[300px] md:h-[600px] mt-12 mb-12">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${post.youtube_id}`}
              allowFullScreen
            ></iframe>
          </div>
        )}
        <DividerHeader title={"Välimus"} />
        <div className="flex w-full flex-row gap-2 my-2 flex-wrap lg:flex-nowrap">
          <div className="w-1/2 text-justify flex-grow">
            <Paragraph value={post.exterior_content && post.exterior_content} />
          </div>
          <div className="w-full md:ml-4 sticky top-16 lg:top-0 xl:top-2 lg:w-1/2 md:h-full ">
            <SlideShow images={post.exterior_slides} />
          </div>
        </div>
        <DividerHeader title={"Interjöör"} />
        <div className="flex w-full flex-row-reverse gap-2 my-2 flex-wrap lg:flex-nowrap">
          <div className="w-1/2 text-justify flex-grow">
            <Paragraph value={post.interior_content && post.interior_content} />
          </div>
          <div className="w-1/2 md:mr-4 sticky top-16 lg:top-0 xl:top-2 md:h-full flex-grow">
            <SlideShow images={post.exterior_slides} />
          </div>
        </div>
        <DividerHeader title={"Sõitmine"} />
        <div className="flex w-full flex-row gap-2 my-2 flex-wrap lg:flex-nowrap">
          <div className="w-1/2 text-justify flex-grow">
            <Paragraph value={post.driving_content && post.driving_content} />
          </div>
          <div className="w-1/2 md:ml-4 sticky h-full lg:top-0 xl:top-2 md:h-full flex-grow">
            <SlideShow images={post.driving_slides} />
          </div>
        </div>
        <div className="mt-12">
          {post.gallery_slides && <SlideShow images={post.gallery_slides} />}
        </div>
      </div>
      <div
        className="h-[60vh] mt-12 flex justify-center items-center"
        style={{
          backgroundImage: `url(${post.conclusion_img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white lg:w-10/12 2xl:w-8/12 sm:w-11/12 text-center text-md md:text-lg font-semibold">
          <DividerHeader title={"Kellele?"} />
          <Paragraph value={post.conclusion_content} />
        </div>
      </div>
      <div className="w-11/12 lg:w-10/12 2xl:w-8/12 sm:w-11/12 flex-col items-start mx-auto md:mx-auto">
        <DividerHeader title={"Auto andmed"} />
        <div className="h-full flex flex-row gap-5 flex-wrap md:flex-nowrap">
          <div className=" w-full md:w-1/2 relative aspect-w-1 aspect-h-2 flex-grow h-[calc(100vh-500px)] md:h-[calc(100vh-300px)]">
            <Image
              src={post.stats_img}
              fill
              className="object-contain"
              alt="specs"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 text-3xl text-center flex-grow">
            <div>
              <h3>Hind alates: {post.price_beginning + "€"}</h3>
            </div>
            <div className="py-2"></div>
            <div className="gap-2 flex flex-col">
              <h2>Testitud mudeli info:</h2>
              {post.price_tested && <h3>{post.price_tested}€</h3>}
              <h3>{post.fuel}</h3>
              <h3>{post.engine}</h3>
              <h3>{post.power}kW</h3>
              <h3>{post.fuel_consumption}l/100km</h3>
              <h3>{post.drivetrain}</h3>
              <h3>{post.gearbox}</h3>
              <h3>Max {post.top_speed} km/h</h3>
              <h3>0-100 km/h: {post.acceleration} sec</h3>
            </div>
          </div>
        </div>
        <DividerHeader title={"TÄNAME PROOVISÕIDU EEST"} wrap={true} />
        <div className="w-full flex justify-center">
          <a
            className="font-semibold text-4xl uppercase cursor-pointer pt-4"
            href={post.dealer}
            target="_blank"
          >
            {post.dealer_name}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Post;

export async function getStaticPaths() {
  const slugs = await getAllSlugs();

  const paths = slugs.map((slugObj) => ({
    params: { slug: slugObj.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  return {
    props: { post },
    revalidate: 10,
  };
}
