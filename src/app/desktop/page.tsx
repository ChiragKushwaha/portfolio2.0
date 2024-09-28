import Image from "next/image";
import Dock from "../../components/desktop/dock";
import Folder from "../../components/desktop/folder";
import Header from "../../components/desktop/header";
import Menu from "../../components/desktop/menu";
import RightClickOverrideWrapper from "../../components/desktop/right-click-override-wrapper";
import Terminal from "../../components/desktop/terminal";

const Desktop = ({ className }: { className: string }) => {
  return (
    <RightClickOverrideWrapper className={className}>
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
