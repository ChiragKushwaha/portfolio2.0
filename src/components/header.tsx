import React from "react";

const Header = () => {
  return (
    <div className="w-full z-10 h-[30px] absolute top-0 left-0 flex items-center justify-between bg-gray-500 bg-opacity-40 backdrop-blur-[50px] select-none">
      <LeftSection />
      <RightSection />
    </div>
  );
};

// Left Section Component
const LeftSection = () => {
  const list = ["Finder", "File", "Edit", "View", "Go", "Window", "Help"];
  return (
    <div className="flex items-center justify-evenly w-auto ml-5">
      <img
        src="/logos/apple_logo_white.png"
        className="w-3.5 scale-[1.1]"
        alt="Apple Logo"
      />
      {list.map((item, index) => (
        <div
          key={index}
          className={`h-full flex items-center ml-5 text-white text-opacity-95 text-sm ${
            index === 0 ? "font-bold" : ""
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

// Right Section Component
const RightSection = () => {
  return (
    <div className="flex items-center justify-evenly w-[380px] mr-5">
      <MenuIcon
        imageSrc="/icons/volume.png"
        alt="Volume"
        className="w-3.5 mr-[-10px] scale-[1.2]"
      />
      <MenuIcon
        imageSrc="/icons/bluetooth-b-brands-solid.png"
        alt="Bluetooth"
        className="filter invert w-3 scale-[.8]"
      />
      <MenuIcon
        imageSrc="/icons/battery-half-solid.png"
        alt="Battery"
        className="filter invert w-3.5 scale-[1.3]"
      />
      <MenuIcon
        imageSrc="/icons/wifi-solid.png"
        alt="Wifi"
        className="filter invert w-3.5 scale-[1.2]"
      />
      <MenuIcon
        imageSrc="/icons/magnifying-glass-solid.png"
        alt="Search"
        className="filter invert w-3.5 scale-[1]"
      />
      <MenuIcon
        imageSrc="/icons/control-center.png"
        alt="Control Center"
        className="filter invert w-3.5"
      />
      <MenuIcon
        imageSrc="/icons/siri.png"
        alt="Siri"
        className="w-3.5 scale-[1.4] object-fill"
      />
      <div className="h-full w-auto flex items-center justify-center text-white text-sm">
        Mon 31 May 05:30 {/* Consider making this dynamic */}
      </div>
    </div>
  );
};

// Reusable Menu Icon Component
const MenuIcon = ({
  imageSrc,
  className,
  alt,
}: {
  imageSrc?: string;
  className?: string;
  alt?: string;
}) => {
  return (
    <div
      className={`h-full w-2.5 flex items-center justify-cente ${className}`}
    >
      {imageSrc && <img src={imageSrc} alt={alt} />}
    </div>
  );
};
export default Header;
