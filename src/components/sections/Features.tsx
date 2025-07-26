import Image from "next/image";
import React from "react";

const Features = ({
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
      icon: string;
      title: string;
      subtitle: string;
      short_description?: string;
    }>;
  };
}) => {
  return (
    <div>
      <h1 className="text-xl font-semibold">{section.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 bg-[#111826]">
        {section.values.map((value: any) => (
          <div
            key={value.id}
            className="flex items-start gap-4 mt-2 py-6 p-6 rounded-lg"
          >
            <div className="flex-shrink-0">
              <Image
                src={value.icon}
                alt={value.short_description|| "Feature Icon"}
                width={35}
                height={35}
                className="rounded-full"
              />
            </div>
            <div className="w-3/4">
              <h1 className="text-white text-lg font-semibold">
                {value?.title}
              </h1>
              <p className="text-gray-400 text-sm">{value?.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
