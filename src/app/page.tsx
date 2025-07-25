"use client";
import Navbar from "@/components/Navbar";
import { useGetIeltsCourseQuery } from "./ieltsApi";
import Hero from "@/components/Hero";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("en");
  const { data: apiResponse, error, isLoading } = useGetIeltsCourseQuery({ lang });
  const course = (apiResponse as any)?.data;

  return (
    <div>
      <Navbar 
      lang={lang}
      setLang={setLang}
      />
      <Hero
      title={course?.title || "IELTS Course"}
      description={course?.description || "Learn IELTS with our comprehensive course."}
      />
    </div>
  );
}
