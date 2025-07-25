import Image from "next/image";
import React from "react";

const Checklist = ({
  checklist,
}: {
  checklist: Array<{
    id: string;
    icon: string;
    name: string;
    text: string;
  }>;
}) => {
  return (
    <div className=" p-3">
      <h1 className="text-black text-lg font-semibold mb-2">
        এই কোর্সে যা থাকছে
      </h1>
      {checklist.map((value: any) => (
        <div key={value.id} className="flex items-center gap-2 my-2 text-black">
          <Image
            src={value.icon}
            alt={value.name}
            width={20}
            height={20}
            className="w-6 h-6"
          />
          <span>{value.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Checklist;
