import React from "react";
import SystemLoadingScreen from "../../components/desktop/system-loading-screen";

const SwitchingOn = ({ className }: { className: string }) => {
  return <SystemLoadingScreen className={className} />;
};

export default SwitchingOn;
