import Dock from "@/components/dock";
import Menu from "@/components/menu";
import RightClickOverrideWrapper from "@/components/right-click-override-wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <RightClickOverrideWrapper>
      {/* <div> */}
      {/* <Image
          className="w-full h-full"
          objectFit="cover"
          objectPosition="center"
          layout="fill"
          src={"/wallpapers/wallpaper.jpg"}
          alt="wallpaper"
        /> */}
      <Dock />
      <Menu />
      {/* </div> */}
      {/* <div className="bg-yellow-200 w-full h-screen">
        <div className="fixed bottom-2 left-0 z-50 px-4 w-full h-16">
          <div className="isolate aspect-video rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 w-full h-16">
            
          </div>
        </div>
      </div> */}
    </RightClickOverrideWrapper>
  );
}
