"use client";
import Navbar from "@/components/Navbar";
import { useGetIeltsCourseQuery } from "./ieltsApi";
import { useState } from "react";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: true,
});
const SectionSlider = dynamic(() => import("@/components/SectionSlider"), {
  ssr: true,
});

export default function Home() {
  const [lang, setLang] = useState("en");
  const {
    data: apiResponse,
    error,
    isLoading,
  } = useGetIeltsCourseQuery({ lang });
  const course = (apiResponse as any)?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Error loading course data.</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <Navbar lang={lang} setLang={setLang} />

      {course?.media && (
        <Hero
          title={course?.title || "IELTS Course"}
          description={
            course?.description || "Learn IELTS with our comprehensive course."
          }
          media={course?.media || []}
          checklist={course?.checklist}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-12 xl:grid-cols-8 justify-end relative z-40">
        <div className="flex items-center md:items-end flex-col md:col-span-7 xl:col-span-5">
          <div className="w-[95%] xl:w-[85%]">
            <SectionSlider sections={course?.sections?.slice(2) || []} />
          </div>
        </div>
      </div>
    </div>
  );
}
