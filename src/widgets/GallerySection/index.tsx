import React from "react";
import { ImageSlider } from "../ImageSlider";

const GallerySection = () => {
  return (
    <div id="gallery" className="flex flex-col  py-[64px] px-[24px] gap-[20px]">
      <h2 className="text-[24px] font-bold text-center">Галерея</h2>
      <div className=" mx-auto max-w-[1100px] tablet:w-[270px] ">
        <ImageSlider />
      </div>
    </div>
  );
};

export default GallerySection;
