import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-5">
      <p className="bg-secondary p-3 text-white">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true}>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum
          nihil doloremque ullam doloribus consectetur.
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum
          nihil doloremque ullam doloribus consectetur.
        </p>
        <p className="font-bold">
          Hridoy ipsum dolor sit amet consectetur adipisicing elit. Dolor cum
          nihil doloremque ullam doloribus consectetur.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
