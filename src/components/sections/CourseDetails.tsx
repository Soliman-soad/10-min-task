import { ChevronUp } from "lucide-react";
import React, { useState } from "react";

const CourseDetails = ({
  section,
}: {
  section: {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
}) => {
  const [sectionOpen, setSectionOpen] = useState("");
  return (
    <>
      <h3 className="text-2xl font-semibold">{section.name}</h3>
      <div>
        <div className="mt-4 border border-gray-300 p-6 rounded-lg divide-y divide-gray-200">
          {section.values.map((value: any) => (
            <div
              key={value.id}
              className="flex flex-col items-start gap-2 mb-2 pb-4"
            >
              <button
                type="button"
                onClick={() => {
                  setSectionOpen(sectionOpen === value.id ? "" : value.id);
                }}
                className="flex justify-between w-full"
              >
                <h1
                  dangerouslySetInnerHTML={{ __html: value.title }}
                  className="font-semibold bg-transparent border-none p-0 m-0 text-left"
                />
                <ChevronUp
                  className={`transition-transform duration-300 ${
                    sectionOpen === value.id ? "" : "rotate-180"
                  }`}
                />
              </button>
              {sectionOpen === value.id && (
                <p dangerouslySetInnerHTML={{ __html: value.description }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
