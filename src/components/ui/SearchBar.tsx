import { Search } from "lucide-react";
import React from "react";

const SearchBar = ({
  placeholder = "Search...",
  onChange = () => {},
  value = "",
}: {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}) => {
  return (
    <div className="flex items-center gap-2 border border-gray-300 rounded-4xl p-2 w-full md:w-[260px] lg:w-[420px] md:max-w-[420px]">
      <Search />
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="w-full outline-none"
        autoComplete="off"
      />
    </div>
  );
};

export default SearchBar;
