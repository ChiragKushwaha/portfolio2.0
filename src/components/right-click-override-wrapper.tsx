"use client";
import React, { PropsWithChildren, useEffect } from "react";
import Menu from "./menu";

const RightClickOverrideWrapper = ({ children }: PropsWithChildren) => {
  const contextMenuFunction = (event: MouseEvent) => {
    var ctxMenu = document.getElementById("ctxMenu");
    if (ctxMenu) {
      ctxMenu.style.display = "block";
      ctxMenu.style.visibility = "visible";
      ctxMenu.style.position = "absolute";
      ctxMenu.style.left = event.pageX - 10 + "px";
      ctxMenu.style.top = event.pageY - 10 + "px";
    }
    event.preventDefault();
  };
  const outsideClickFunction = (event: MouseEvent) => {
    var ctxMenu = document.getElementById("ctxMenu");
    if (ctxMenu && event.target !== ctxMenu) {
      ctxMenu.style.display = "";
      ctxMenu.style.position = "";
      ctxMenu.style.visibility = "hidden";
      ctxMenu.style.left = "";
      ctxMenu.style.top = "";
    }
  };

  useEffect(() => {
    var wrapper = document.getElementById("right-click-override-wrapper");
    if (wrapper) {
      wrapper.addEventListener("contextmenu", contextMenuFunction, false);
      wrapper.addEventListener("click", outsideClickFunction, false);
    }
    return () => {
      if (wrapper) {
        wrapper.removeEventListener("contextmenu", contextMenuFunction);
        wrapper.removeEventListener("click", outsideClickFunction);
      }
    };
  }, []);

  return (
    <div id="right-click-override-wrapper" className="w-screen h-screen">
      {children}
    </div>
  );
};

export default RightClickOverrideWrapper;
