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
    <div className="w-[350px] p-2 border border-gray-300 rounded-4xl flex items-center gap-2">
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
