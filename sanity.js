import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: "0qeyb33s",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
  const posts = await client.fetch('*[_type == "article"]');
  return posts;
}

export async function getPostsForGrid() {
  const posts = await client.fetch(`
        *[_type == "article"]{
          "id": _id,
          manufacturer,
          model,
          "price": price_beginning,
          "body": body_type,
          "image": grid_img,
          "slug": slug.current,
          date
        }
      `);
  return posts;
}

export async function getAllSlugs() {
  const slugs = await client.fetch(`
  *[_type == "article"]{
    "slug": slug.current
  }
  `);
  return slugs;
}

export async function getPostBySlug(slug) {
  const query = `*[_type == "article" && slug.current == $slug][0]`;

  const params = { slug };

  const post = await client.fetch(query, params);

  return post;
}

export async function getAccordionPosts() {
  const posts = await client.fetch(`
    *[_type == "article"] | order(date desc) [0..2] {
      "slug": slug.current,
      manufacturer,
      model,
      "accordion_img": accordion_img
    }
  `);
  return posts;
}
