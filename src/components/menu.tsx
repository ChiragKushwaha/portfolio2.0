"use client";
import React, { useState } from "react";

const Menu = () => {
  return (
    // <menu id="ctxMenu" className="w-16 h-40 bg-yellow-200">
    <ContextMenu />
    // </menu>
  );
};

export default Menu;

const ContextMenu = () => {
  const list = [
    "New Folder",
    "Get Info",
    "Change Wallpaper...",
    "Edit Widgets...",
    "Use Stacks",
    "Sort",
    "Clean Up",
    "Clean Up By",
    "Show View Options",
  ];
  return (
    <div
      id="ctxMenu"
      style={{ visibility: "hidden" }}
      className="px-2 py-1.5 w-auto h-auto flex items-center justify-center rounded-xl bg-gray-700 bg-opacity-25 backdrop-blur-sm border-[0.1px] border-gray-400 border-opacity-18 text-white divide-y-[1px] divide-gray-400 select-none"
    >
      {list.map((item, index) => {
        return <Item key={index} title={item} />;
      })}
    </div>
  );
};

const Item = ({ title }: { title: string }) => {
  return (
    <div className="px-4 py-1 cursor-pointer hover:rounded-md text-sm hover:bg-[rgb(45,89,188)]">
      {title}
    </div>
  );
};
