import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState } from "react";

interface Section {
  type: string;
  name: string;
  description: string;
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
    <div className="flex flex-col items-center gap-6 w-full max-w-xl mx-auto">
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
              className={`px-4 py-2 whitespace-nowrap transition font-medium ${
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
  );
};

export default SectionSlider;
