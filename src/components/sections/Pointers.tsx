import { Check } from "lucide-react";
import React from "react";

const Pointers = ({
  section,
}: {
  section: {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: Array<{
      text: string;
    }>;
  };
}) => {
  return (
    <>
      <h3 className="text-2xl font-semibold">{section.name}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border border-gray-300 p-6 rounded-lg items-start">
        {section.values.slice(0, 3).map((value: any) => (
          <div className="flex items-start gap-2" key={value.text}>
            <Check size={20} color="#6394f7" className="flex-shrink-0" />{" "}
            {value.text}
          </div>
        ))}
        {section.values.slice(3, 6).map((value: any) => (
          <div className="flex items-start gap-2" key={value.text}>
            {" "}
            <Check size={20} color="#6394f7" className="flex-shrink-0" />{" "}
            {value.text}
          </div>
        ))}
      </div>
    </>
  );
};

export default Pointers;
