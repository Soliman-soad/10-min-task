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

  console.log(course?.sections);

  return (
    <div>
      <Navbar lang={lang} setLang={setLang} />
      <Hero
        title={course?.title || "IELTS Course"}
        description={
          course?.description || "Learn IELTS with our comprehensive course."
        }
      />
      <SectionSlider
        sections={course?.sections?.filter((e: any) => e.name) || []}
      />
    </div>
  );
}
