import React, { useState } from "react";
import Filters from "./Filters";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

function Grid({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  return (
    <div className="flex justify-center mt-6 flex-col items-center">
      <Filters
        posts={posts}
        filteredPosts={filteredPosts}
        setFilteredPosts={setFilteredPosts}
      />
      <div className="grid grid-cols-3 gap-2 mt-20 w-4/6 min-h-screen">
        <AnimatePresence>
          {filteredPosts?.map((post) => {
            return (
              <motion.div
                layout="position"
                key={post.id}
                className="w-full relative"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={post.image}
                    width={728}
                    height={970}
                    alt={post.model}
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Grid;
