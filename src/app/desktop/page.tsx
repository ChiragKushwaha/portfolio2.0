import Image from "next/image";
import Dock from "../../components/dock";
import Folder from "../../components/folder";
import Header from "../../components/header";
import Menu from "../../components/menu";
import RightClickOverrideWrapper from "../../components/right-click-override-wrapper";
import Terminal from "../../components/terminal";

const Desktop = () => {
  return (
    <RightClickOverrideWrapper>
      <Header />
      <Image
        className="w-full h-full"
        objectFit="cover"
        objectPosition="center"
        layout="fill"
        src={"/wallpapers/wallpaper.jpg"}
        alt="wallpaper"
      />
      <Terminal />
      <Folder />
      <Dock />
      <Menu />
    </RightClickOverrideWrapper>
  );
};

export default Desktop;
