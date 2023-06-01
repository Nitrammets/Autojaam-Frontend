import React from "react";
import { getAllSlugs, getPostBySlug } from "@/sanity";
import { PortableText } from "@portabletext/react";
import Paragraph from "@/components/PortableText/Paragraph";
import DividerHeader from "@/components/Utility/DividerHeader";
import SlideShow from "@/components/Utility/SlideShow";

function Post({ post }) {
  if (!post || !post.cover_img) {
    return null;
  }

  console.log(post);

  return (
    <div className="flex flex-col justify-center mb-32">
      <style>
        {`
            body {
              background-image: linear-gradient(to right, #FFFFFF 0%, #F1F1F1 33%, #F1F1F1 67%, #FFFFFF 100%);
            }
              .video-container {
                position: relative;
                padding-bottom: 56.25%; /* 16:9 aspect ratio (modify this value based on your aspect ratio) */
                height: 0;
                overflow: hidden;
              }
            `}
      </style>
      <div
        className="h-screen w-screen"
        style={{
          backgroundImage: `url(${post.cover_img ? post.cover_img : ""})`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-7/12 mx-auto text-lg">
        <div className="text-black text-center mt-12">
          <Paragraph value={post.intro ? post.intro : ""} />
        </div>
        <div className="h-[600px] mt-12 mb-12">
          <div className="video-container">
            <iframe
              width="100%"
              height="600px"
              src={`https://www.youtube.com/embed/${post.youtube_id}`}
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <DividerHeader title={"Välimus"} />
        <div className="flex w-full flex-row gap-2 my-2">
          <div className="w-1/2 text-justify">
            <Paragraph value={post.exterior_content && post.exterior_content} />
          </div>
          <div className="w-1/2 ml-4 h-full">
            <SlideShow images={post.exterior_slides} />
          </div>
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
