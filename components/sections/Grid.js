import React, { useState, useContext } from "react";
import Filters from "./Filters";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FilterContext } from "@/Context/FilterContext";

function Grid() {
  const { filteredPosts, visiblePosts, loadMorePosts } =
    useContext(FilterContext);

  const paginatedPosts = filteredPosts?.slice(0, visiblePosts);

  return (
    <div className="flex justify-center my-6 flex-col items-center ">
      <Filters />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-12 w-11/12 lg:w-4/6  min-h-fit">
        <AnimatePresence>
          {paginatedPosts?.map((post) => {
            return (
              <Link
                href={`/posts/${post.slug}`}
                key={post.id}
                className="h-min-content"
              >
                <motion.div
                  layout="position"
                  className="w-full relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative w-full h-full">
                    {post.image ? (
                      <Image
                        src={post.image}
                        width={728}
                        height={970}
                        alt={post.model}
                        priority
                      />
                    ) : (
                      post.title
                    )}
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="w-full flex justify-center items-center">
        {filteredPosts?.length > visiblePosts && (
          <button
            onClick={loadMorePosts}
            className="my-4 py-2 px-4 bg-transparent text-white border border-white rounded-lg hover:border-aj-red hover:text-aj-red"
          >
            Näita Rohkem
          </button>
        )}
      </div>
    </div>
  );
}

export default Grid;
