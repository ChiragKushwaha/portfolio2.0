import React from "react";

const ProgressBar = () => {
  return (
    <div className="w-96 h-5 relative border border-black">
      <div
        className="bg-blue h-full w-full bg-white flex items-center justify-center
                animate-slideInFromLeft rounded-full"
      ></div>
      <div
        className="bg-blue h-full w-full bg-white flex items-center justify-center
                animate-slideInFromLeft rounded-full blur-sm absolute top-0"
      ></div>
    </div>
  );
};

export default ProgressBar;
