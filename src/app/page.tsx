import Dock from "@/components/dock";
import Menu from "@/components/menu";
import RightClickOverrideWrapper from "@/components/right-click-override-wrapper";
import Image from "next/image";
import Folder from "../components/folder";
import Header from "../components/header";
import Terminal from "../components/terminal";

export default function Home() {
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
}
