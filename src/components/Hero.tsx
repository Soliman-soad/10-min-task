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
    <>
      <div className="relative text-white py-10  border md:h-[30vh] xl:h-[45vh]">
        <Image
          src="https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg"
          alt="Hero Background"
          fill
          className="object-cover object-center z-0"
        />

        <div className="flex flex-col md:flex-row ">
          <div className="relative z-20 p-1 lg:p-4 w-full flex flex-col md:flex-row justify-center lg:justify-end lg:mt-10">
            <div className="w-[95%] mx-auto md:hidden mb-5">
              <CustomCarousel media={media || []} />
            </div>
            <div className="w-[90%] xl:w-[85%] space-y-2 mx-auto md:mx-0">
              <h1 className="text-xl md:text-4xl font-semibold">{title}</h1>
              <h3 className="flex flex-col md:flex-row md:items-center gap-2 font-medium text-gray-300 text-sm md:text-base">
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
                className="text-neutral-400"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>

          <div className="w-[70%] hidden md:block">
            <div className="md:max-w-[300px] lg:max-w-[400px] relative mx-auto bg-white p-2 overflow-visible z-50 space-y-5 border border-gray-300">
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
      <div className="w-[95%] mx-auto md:hidden mt-5 space-y-2">
        <h2 className="text-black font-bold text-xl md:text-3xl">৳1000</h2>
        <Button label="Enroll" className="border-b-4 border-green-700 w-full" />

        <Checklist checklist={checklist || []} />
      </div>
    </>
  );
};

export default Hero;
