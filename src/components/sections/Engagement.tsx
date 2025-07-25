import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const Engagement = ({
  section,
}: {
  section: {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: Array<{
      top_left_icon_img: string;
      title: string;
      description: string;
      thumbnail: string;
      cta: {
        text: string;
      };
      background: {
        image: string;
      };
    }>;
  };
}) => {
  return (
    <div className="relative rounded-b-lg flex flex-col md:flex-row items-center justify-between gap-4 p-6">
      <div className="space-y-4 w-3/4">
        <Image
          src={section.values[0].top_left_icon_img}
          alt="Free pdf"
          width={180}
          height={180}
          className="rounded-full"
        />

        <h1 className="text-white text-xl font-semibold">
          {section.values[0].title}
        </h1>
        <p className="text-[#ededed]">{section.values[0].description}</p>

        <Button
          label={section.values[0].cta.text}
          className="border-b-4 border-green-700"
        />
      </div>
      <div className="w-3/4">
        <Image
          src={section.values[0].thumbnail}
          width={320}
          height={320}
          alt="Thumbnail Image"
          className="rounded-sm mx-auto"
        />
      </div>
      <Image
        src={section.values[0].background.image}
        fill
        alt="Background Image"
        className="absolute -z-10"
      />
    </div>
  );
};

export default Engagement;
