import Image from "next/image";
import React from "react";

const Instructor = ({
  section,
}: {
  section: {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: Array<{
      slug: string;
      image: string;
      short_description: string;
      description: string;
      name: string;
    }>;
  };
}) => {
  return (
    <>
      {section.values.map((value) => (
        <div key={value.slug}>
          <h3 className="text-2xl font-semibold">{section.name}</h3>
          <div className="flex items-center gap-4 mt-2 border border-gray-300 p-6 rounded-lg">
            <div>
              <Image
                src={value.image}
                alt={value.short_description}
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="cursor-pointer hover:text-green-600 text-xl">
                {value?.name}
              </h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: value?.description,
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Instructor;
