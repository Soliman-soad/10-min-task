import { Star } from "lucide-react";
import React from "react";

const Hero = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="space-y-1">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <h3 className="flex items-center gap-2 text-lg font-medium text-gray-600">
        <div className="inline-flex items-center gap-1">
          <Star fill="#ffa600" strokeWidth={0} />
          <Star fill="#ffa600" strokeWidth={0} />
          <Star fill="#ffa600" strokeWidth={0} />
          <Star fill="#ffa600" strokeWidth={0} />
          <Star fill="#ffa600" strokeWidth={0} />
        </div>
        <span>(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</span>
      </h3>
      <p
        className="text-lg"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default Hero;
