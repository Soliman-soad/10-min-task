import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import CustomCarousel from "./CustomCarousel";
import Button from "./ui/Button";
import Checklist from "./Checklist";

const Hero = ({
  title,
  description,
  media,
  checklist,
}: {
  title: string;
  description: string;
  media: any;
  checklist?: any;
}) => {
  return (
    <div className="relative text-white py-10  border h-[45vh]">
      <Image
        src="https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg"
        alt="Hero Background"
        fill
        className="object-cover object-center z-0"
      />

      <div className="flex">
        <div className="relative z-20 space-y-1 p-4 w-full">
          <h1 className="text-3xl font-semibold">{title}</h1>
          <h3 className="flex items-center gap-2 text-lg font-medium text-gray-300">
            <div className="inline-flex items-center gap-1">
              <Star fill="#ffa600" strokeWidth={0} />
              <Star fill="#ffa600" strokeWidth={0} />
              <Star fill="#ffa600" strokeWidth={0} />
              <Star fill="#ffa600" strokeWidth={0} />
              <Star fill="#ffa600" strokeWidth={0} />
            </div>
            <span>(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</span>
          </h3>
          <p
            className="text-lg text-white"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div className="w-full">
          <div className="max-w-[350px] relative mx-auto bg-white p-2 overflow-visible z-50 space-y-5 border border-gray-300">
            <CustomCarousel media={media || []} />
            <h2 className="text-black text-3xl">৳1000</h2>
            <Button
              label="Enroll"
              className="border-b-4 border-green-700 w-full"
            />

            <Checklist checklist={checklist || []} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
