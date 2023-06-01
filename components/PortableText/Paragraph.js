import React from "react";
import { PortableText, serializers } from "@portabletext/react";

const myPortableTextComponents = {
  marks: {
    link: ({ children, value }) => {
      return (
        <a href={value.href} style={{ color: "red" }}>
          {children}
        </a>
      );
    },
  },
};

function Paragraph({ value }) {
  return <PortableText value={value} components={myPortableTextComponents} />;
}

export default Paragraph;
