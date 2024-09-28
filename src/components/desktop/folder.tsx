import React from "react";
import DraggableItemWrapper from "./draggable-item-wrapper";

const Folder = () => {
  return (
    <DraggableItemWrapper id={"f1"}>
      <div className="space-y-2">
        <img src="/icons/folder.png" alt="folder" width={80} />
        <div className="text-sm text-white text-center">New Folder</div>
      </div>
    </DraggableItemWrapper>
  );
};

export default Folder;
