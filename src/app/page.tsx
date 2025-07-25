"use client";
import Navbar from "@/components/Navbar";
import { useGetIeltsCourseQuery } from "./ieltsApi";
import Hero from "@/components/Hero";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("en");
  const { data, error, isLoading } = useGetIeltsCourseQuery({ lang });
  console.log(data)

  return (
    <div>
      <Navbar 
      lang={lang}
      setLang={setLang}
      />
      <Hero/>
    </div>
  );
}
