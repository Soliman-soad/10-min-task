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
    <div>
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
      <div className="grid grid-cols-2">
        <div className="mx-auto w-[95%]">
          <SectionSlider
            sections={
              course?.sections?.filter(
                (e: any) => e.order_idx !== 1 && e.order_idx !== 2
              ) || []
            }
          />
        </div>
      </div>
    </div>
  );
}
