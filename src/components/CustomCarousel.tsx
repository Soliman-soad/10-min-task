"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function CustomCarousel({ media }: { media: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (thumbRefs.current[currentIndex]) {
      thumbRefs.current[currentIndex]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentIndex]);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = media[currentIndex];

  return (
    <div className="w-full max-w-[320px] mx-auto">
      {/* Main Display */}
      <div className="relative aspect-video overflow-hidden mb-4 bg-black">
        {currentSlide.resource_type === "video" ? (
          <ReactPlayer
            src="https://youtu.be/zrlYnaZftEQ?si=fP3z5WMmAF1f2HvT"
            controls={true}
            playIcon={
              <button className="bg-white text-white p-3 rounded-full shadow-lg">
                <Play size={32} fill="#78C841" strokeWidth={0} />
              </button>
            }
            light={currentSlide.thumbnail_url}
            width="100%"
            height="100%"
          />
        ) : (
          <div className="w-full h-full relative">
            <Image
              src={currentSlide.thumbnail_url || currentSlide.resource_value}
              alt={currentSlide.name}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Navigation Arrows */}
        <button
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-1 rounded-full hover:bg-opacity-80"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-1 rounded-full hover:bg-opacity-80"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar">
        {media.map((slide: any, index: number) => (
          <div
            key={index}
            ref={(el) => {
              thumbRefs.current[index] = el;
            }}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer rounded-md  border-2 overflow-hidden min-w-[80px] h-[40px] relative ${
              index === currentIndex ? "border-green-500" : "border-transparent"
            }`}
          >
            {slide.resource_type === "video" && (
              <button className="bg-white text-white p-1 rounded-full shadow-lg absolute top-[30%] right-[40%]">
                <Play size={10} fill="red" strokeWidth={0} />
              </button>
            )}
            <Image
              src={slide.thumbnail_url || slide.resource_value}
              alt={`Thumbnail ${index}`}
              width={100}
              height={30}
              className="w-[100px] h-[40px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
