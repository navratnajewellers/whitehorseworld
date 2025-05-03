"use client";

import Image from "next/image";

const WBreadcumb = ({ headingText }) => {
  return (
    <div className=" relative h-[300px] w-full flex justify-center items-center z-0 ">
      <Image
        src="/images/inner-banner.jpg"
        alt="bread-cumb-bg-image"
        fill
        style={{ filter: "brightness(70%)", zIndex: "-1" }}
      />

      <h2 className=" text-4xl md:text-6xl font-bold font-ds ">
        {headingText}
      </h2>
    </div>
  );
};

export default WBreadcumb;
