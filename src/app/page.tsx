"use client";
import Navbar from "@/components/Navbar";
import { useGetIeltsCourseQuery } from "./ieltsApi";
import Hero from "@/components/Hero";
import { useState } from "react";
import SectionSlider from "@/components/SectionSlider";

export default function Home() {
  const [lang, setLang] = useState("en");
  const {
    data: apiResponse,
    error,
    isLoading,
  } = useGetIeltsCourseQuery({ lang });
  const course = (apiResponse as any)?.data;

  console.log(course);

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
      <div className="grid grid-cols-8 justify-end relative z-40">
        <div className="flex items-end flex-col  col-span-5">
          <div className="w-[85%]">
            <SectionSlider sections={course?.sections?.slice(2) || []} />
          </div>
        </div>
      </div>
    </div>
  );
}
