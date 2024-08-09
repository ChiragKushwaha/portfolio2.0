import React, { useEffect } from "react";
import DraggableItemWrapper from "./draggable-item-wrapper";

const Terminal = () => {
  return (
    <DraggableItemWrapper id={"terminal"}>
      <div className="absolute bg-gray-900 w-72 h-52 ml-5 mt-5 rounded overflow-hidden z-10 top-40 left-40">
        <div className="bg-gray-800 py-1 flex items-center relative">
          <div className="flex items-center gap-x-2 px-2">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
          </div>
          <h1 className="w-full absolute text-xs text-center text-gray-400">
            Documents - bash - 80x24
          </h1>
        </div>
        <div className="text-sm text-gray-400 flex items-center px-2 py-1">
          <div className="whitespace-nowrap">Chirag Kushwaha:~ &nbsp;</div>
          <div className="typing-demo w-[22ch] whitespace-nowrap overflow-hidden border-r-3 border-solid font-mono text-sm animate-typing">
            Hello Stranger
          </div>
        </div>
      </div>
    </DraggableItemWrapper>
  );
};

export default Terminal;
