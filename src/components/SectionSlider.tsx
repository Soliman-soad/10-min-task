import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Instructor from "./sections/Instructor";
import Features from "./sections/Features";
import Button from "./ui/Button";
import Engagement from "./sections/Engagement";
import Pointers from "./sections/Pointers";
import FeatureExplanations from "./sections/FeatureExplanations";
import CourseDetails from "./sections/CourseDetails";

interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: Array<any>;
}

interface SectionSliderProps {
  sections: Section[];
}

const SectionSlider = ({ sections }: SectionSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);

  const scrollRow = (direction: "left" | "right") => {
    if (rowRef.current) {
      const scrollAmount = 120;
      rowRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-6 w-full mx-auto mb-10 mt-5">
        <div className="flex items-center w-full">
          <button
            onClick={() => scrollRow("left")}
            className="p-1 text-white bg-neutral-500 rounded-full mr-1"
            aria-label="Scroll left"
          >
            <ChevronLeft />
          </button>
          <div
            ref={rowRef}
            className="flex overflow-x-auto no-scrollbar gap-2 px-2 w-full  border-b border-gray-300"
            style={{ scrollBehavior: "smooth" }}
          >
            {sections.map((section, idx) => (
              <button
                key={section.type}
                onClick={() => setCurrentIndex(idx)}
                className={`px-3 py-2 whitespace-nowrap transition font-medium ${
                  idx === currentIndex
                    ? "border-b border-green-500 text-green-600"
                    : ""
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollRow("right")}
            className="p-1 text-white bg-neutral-500 rounded-full ml-1"
            aria-label="Scroll right"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="space-y-10 xl:space-y-16">
        {sections.map((section) => (
          <div key={section.type}>
            {section.type === "instructors" && <Instructor section={section} />}
            {section.type === "features" && <Features section={section} />}
            {section.type === "group_join_engagement" && (
              <Engagement section={section} />
            )}
            {section.type === "pointers" && <Pointers section={section} />}
            {section.type === "feature_explanations" && (
              <FeatureExplanations section={section} />
            )}
            {section.type === "about" && <CourseDetails section={section} />}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionSlider;
