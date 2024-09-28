"use client";
import ProgressBar from "./progress-bar";
import AppleLogo from "../svgs/apple-logo";

const SystemLoadingScreen = ({ className }: { className: string }) => {
  return (
    <div
      className={`absolute top-0 left-0 right-0 bottom-0 bg-black w-screen h-screen flex flex-col items-center justify-center overflow-hidden p-40 space-y-32 ${className}`}
      style={{ zIndex: 999 }}
    >
      <AppleLogo className="text-white scale-[.55]" />
      <ProgressBar />
    </div>
  );
};

export default SystemLoadingScreen;
