"use client";
import React, { useEffect, useRef, useState } from "react";
import DraggableItemWrapper from "./draggable-item-wrapper";
import { Resizable } from "re-resizable";

const Finder = () => {
  return (
    <DraggableItemWrapper id={"finder"} headerContent={<></>}>
      <Resizable
        //   lockAspectRatio
        minWidth={200}
        minHeight={200}
        defaultSize={{
          width: 200,
          height: 200,
        }}
        as={"div"}
        bounds={"window"}
        style={{ border: "2px solid black", position: "absolute", zIndex: 50 }}
      >
        <div className="border">hllo world</div>
      </Resizable>
    </DraggableItemWrapper>
  );
};

export default Finder;
