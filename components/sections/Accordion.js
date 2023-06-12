import React from "react";
import AccordionTab from "./AccordionTab";

const featured = [
  {
    title: "Audi A3",
    img: "/Rectangle_5.jpg",
  },
  {
    title: "Audi A3",
    img: "/Rectangle_6.jpg",
  },
  {
    title: "Audi A3",
    img: "/Rectangle_7.jpg",
  },
];

function Accordion({ posts }) {
  const reorderedPosts = Array.from(posts, (post, index) => {
    if (index === 3) return posts[0];
    if (index === 1) return posts[0];
    if (index === 0) return posts[1];
    return post;
  });

  return (
    <div className="mt-2 w-full">
      <hr></hr>
      <div className="my-[4px] w-full h-[350px] hidden md:flex overflow-hidden margin-y-[50px]">
        {reorderedPosts.map((post, _) => {
          return (
            <AccordionTab
              img={post.accordion_img}
              title={post.manufacturer + " " + post.model}
              slug={post.slug}
              key={_}
            />
          );
        })}
      </div>
      <div className="my-[4px] w-full h-[350px] flex overflow-hidden margin-y-[50px] md:hidden">
        {posts.slice(0, 1).map((post, _) => {
          return (
            <AccordionTab
              img={post.accordion_img}
              title={post.manufacturer + " " + post.model}
              slug={post.slug}
              key={_}
            />
          );
        })}
      </div>
      <hr></hr>
    </div>
  );
}

export default Accordion;
