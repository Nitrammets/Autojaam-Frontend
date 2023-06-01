import React from "react";
import { getAllSlugs, getPostBySlug } from "@/sanity";
import { PortableText } from "@portabletext/react";

function Post({ post }) {
  return (
    <div className="flex flex-col justify-center">
      <style>
        {`
            body {
              background-image: linear-gradient(to right, #FFFFFF 0%, #F1F1F1 33%, #F1F1F1 67%, #FFFFFF 100%);
              
            }
          `}
      </style>
      <div
        className="h-screen w-screen"
        style={{
          backgroundImage: `url(${post.cover_img})`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-3/4 mx-auto">
        <div className="text-lg">
          <div className="text-black text-center mt-12">
            <PortableText value={post.intro} />
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
  console.log(post);
  return {
    props: { post },
    revalidate: 10,
  };
}
