"use client";
import { PropsWithChildren, useEffect } from "react";

const DraggableItemWrapper = ({
  children,
  id,
}: PropsWithChildren<{ id: string }>) => {
  const dragStart = (event: DragEvent) => {
    const myElement = document.getElementById(id);

    event.dataTransfer?.setData("id", id);
    if (myElement) {
      const boundingRect = myElement.getBoundingClientRect();
      const offset = {
        x: event.clientX - boundingRect.left,
        y: event.clientY - boundingRect.top,
      };
      event.dataTransfer?.setData("offset", JSON.stringify(offset));
    }
  };
  const dragOver = (event: DragEvent) => {
    event.preventDefault();

    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = "move";
    }
  };
  const drop = (event: DragEvent) => {
    const myElement = document.getElementById(id);

    event.preventDefault();

    if (event.dataTransfer?.getData("id") === id) {
      const offset = JSON.parse(event.dataTransfer.getData("offset"));
      const xPos = event.clientX - offset.x;
      const yPos = event.clientY - offset.y;
      if (myElement) {
        myElement.style.left = `${xPos}px`;
        myElement.style.top = `${yPos}px`;
        myElement.style.bottom = "auto";
        myElement.style.right = "auto";
      }
    }
  };
  useEffect(() => {
    const myElement = document.getElementById(id);

    myElement?.addEventListener("dragstart", dragStart);

    document.documentElement.addEventListener("dragover", dragOver);
    document.documentElement.addEventListener("drop", drop);

    return () => {
      myElement?.removeEventListener("dragstart", dragStart);
      document.documentElement.removeEventListener("dragover", dragOver);
      document.documentElement.removeEventListener("drop", drop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div id={id} draggable="true" className="fixed inline-block">
      {children}
    </div>
  );
};

export default DraggableItemWrapper;
