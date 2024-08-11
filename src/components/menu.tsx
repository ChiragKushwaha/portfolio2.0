"use client";
import React, { useState } from "react";
import ChevronRight from "./svgs/chevron-right";

const Menu = () => {
  return (
    // <menu id="ctxMenu" className="w-16 h-40 bg-yellow-200">
    <ContextMenu
      id="ctxMenu"
      style={{ visibility: "hidden" }}
      list={menuList}
    />
    // </menu>
  );
};
const menuList = [
  { title: "New Folder" },
  { title: "" },
  { title: "Get Info" },
  { title: "Change Wallpaper..." },
  { title: "Edit Widgets..." },
  { title: "" },
  { title: "Use Stacks" },
  {
    title: "Sort",
    menu: [
      { title: "None" },
      { title: "" },
      { title: "Snap to Grid" },
      { title: "" },
      { title: "Name" },
      { title: "Kind" },
      { title: "Date Last Opened" },
      { title: "Date Added" },
      { title: "Date Modified" },
      { title: "Date Created" },
      { title: "Size" },
      { title: "Tags" },
    ],
  },
  { title: "Clean Up" },
  {
    title: "Clean Up By",
    menu: [
      { title: "Name" },
      { title: "Kind" },
      { title: "Date Modified" },
      { title: "Date Created" },
      { title: "Size" },
      { title: "Tags" },
    ],
  },
  { title: "Show View Options" },
];

export default Menu;

const ContextMenu = ({
  id,
  style,
  className = "",
  list = [],
}: {
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  list: { title: string; menu?: Array<{ title: string }> }[];
}) => {
  return (
    <div className={className}>
      <div
        id={id}
        style={style}
        className={`px-1 py-1.5 w-auto h-auto flex flex-col rounded-md bg-gray-950 bg-opacity-40 backdrop-blur-sm border-[0.1px] border-gray-200 border-opacity-80 text-white select-none`}
      >
        {list.map((item, index) => {
          if (item.title === "") {
            return (
              <div key={index} className="px-2.5 py-1">
                <div className="bg-gray-200 h-[1px] bg-opacity-30 w-full"></div>
              </div>
            );
          }
          return (
            <div key={index} className="group relative">
              <Item title={item.title} hasMenu={!!item.menu?.length} />
              {!!item.menu?.length && (
                <ContextMenu
                  className="group-hover:visible invisible absolute top-0 left-[10.2rem]"
                  list={item.menu}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Item = ({
  title,
  hasMenu = false,
}: {
  title: string;
  hasMenu: boolean;
}) => {
  return (
    <div className="px-4 py-0.5 cursor-pointer hover:rounded-md text-sm hover:bg-[rgb(45,89,188)] flex items-center justify-between min-w-max">
      <div>{title}</div>
      {hasMenu ? <ChevronRight className="w-[7px]" /> : <></>}
    </div>
  );
};
