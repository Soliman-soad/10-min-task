"use client";
import Navbar from "@/components/Navbar";
import { useGetIeltsCourseQuery } from "./ieltsApi";

export default function Home() {
  const { data, error, isLoading } = useGetIeltsCourseQuery({ lang: "en" });
  console.log(data)

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">IELTS Course Data</h1>        
      </div>
    </div>
  );
}
