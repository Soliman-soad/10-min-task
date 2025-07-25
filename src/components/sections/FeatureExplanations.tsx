import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const FeatureExplanations = ({
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
      checklist: Array<string>;
      file_url: string;
    }>;
  };
}) => {
  return (
    <>
      <h3 className="text-2xl font-semibold">{section.name}</h3>
      <div className="border border-gray-300 rounded-lg mt-4">
        {section.values.map((value: any) => (
          <>
            <div
              key={value.id}
              className="flex items-start gap-4 mt-2 p-4 rounded-lg mb-4"
            >
              <div className="w-full">
                <h1 className="mb-3 text-black">{value.title}</h1>
                {value.checklist.map((item: any) => (
                  <div className="flex items-start gap-2 mb-2" key={item}>
                    <Check
                      size={20}
                      color="#6394f7"
                      className="flex-shrink-0"
                    />{" "}
                    {item}
                  </div>
                ))}
              </div>

              <div className="w-full">
                <Image
                  src={value.file_url}
                  alt={value.title}
                  width={230}
                  height={230}
                  className="mx-auto"
                />
              </div>
            </div>
            <div className="w-[95%] mx-auto last:border-b-0 border-b border-gray-300" />
          </>
        ))}
      </div>
    </>
  );
};

export default FeatureExplanations;
