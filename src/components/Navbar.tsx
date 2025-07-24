import Image from "next/image";
import React, { useState } from "react";
import SearchBar from "./ui/SearchBar";
import Button from "./ui/Button";
import { Languages, Phone, Search } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white border-b border-gray-300">
      <div className="flex items-center justify-between py-2 px-4 md:px-10">
        {/* Left: Logo and SearchBar */}
        <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
          <Image
            src="/10mslogo-svg.svg"
            alt="10ms Logo"
            className="cursor-pointer"
            width={100}
            height={100}
          />
          <div className="hidden sm:block w-full max-w-xs md:max-w-none">
            <SearchBar />
          </div>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 rounded-md "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Search size={24} color="green" />
        </button>
        {/* Right: Buttons */}
        <div className="flex items-center gap-2">
          <Button
            className="hidden md:inline-flex"
            label="বাংলা"
            icon={<Languages />}
            variant="outline"
          />
          <Button
            className="hidden md:inline-flex"
            label="English"
            icon={<Languages />}
            variant="outline"
          />
          <Button
            label="16910"
            className="!text-green-600 border-0 "
            variant="outline"
            labelClassName="hidden md:inline-flex"
            icon={<Phone color="green" size={20} />}
          />
          <Button label="Login" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
