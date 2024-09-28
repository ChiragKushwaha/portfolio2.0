"use client";
import { useEffect, useRef, useState } from "react";
import { ResizablePopup } from "../../components/desktop/resizable";

const Popup = () => {
  const initialRect = {
    bottom: 607.5,
    height: 366.5,
    left: 301.5,
    right: 892,
    top: 241,
    width: 590.5,
    x: 301.5,
    y: 297.5,
  };

  return (
    <div className="h-screen w-screen">
      <ResizablePopup initialRect={initialRect}>
        <div className="w-full h-full bg-blue-300">
          <WindowControls />
        </div>
      </ResizablePopup>
    </div>
  );
};

interface WindowControlsProps {}

const WindowControls: React.FC<WindowControlsProps> = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setIsDropdownOpen(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  return (
    <div className="flex items-center space-x-2 p-2">
      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
      <div className="relative" ref={dropdownRef}>
        <div
          className="w-4 h-4 bg-green-500 rounded-full cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></div>
        {isDropdownOpen && (
          <div className="absolute top-6 left-0 bg-gray-800 text-white rounded-md shadow-lg p-2">
            <div className="flex flex-col space-y-2">
              <div className="flex space-x-2">
                <div className="w-6 h-4 bg-gray-600"></div>
                <div className="w-6 h-4 bg-gray-600"></div>
                <div className="w-6 h-4 bg-gray-600"></div>
              </div>
              <div className="flex space-x-2">
                <div className="w-6 h-4 bg-gray-600"></div>
                <div className="w-6 h-4 bg-gray-600"></div>
                <div className="w-6 h-4 bg-gray-600"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Test = () => {
  return (
    <div className="w-screen h-screen bg-yellow-100">
      <Popup />
    </div>
  );
};

export default Test;
