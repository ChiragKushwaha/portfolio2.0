import React from "react";

const Menu = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center bg-gray-200 p-2">
        <div className="text-xl font-bold">Menu</div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            New Folder
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Get Info
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Change Wallpaper...
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Edit Widgets...
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Use Stacks
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Sort By
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Clean Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
