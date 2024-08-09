"use client";
import React, { useEffect } from "react";

type DockItem = {
  title: string;
  icon: string;
  onClick: React.MouseEventHandler<HTMLLIElement> | undefined;
  className?: string;
};
const Dock = () => {
  const list: DockItem[] = [
    {
      title: "Finder",
      icon: "/icons/finder.png",
      onClick: () => console.log("Finder clicked"),
    },
    {
      title: "Siri",
      icon: "/icons/siri.png",
      onClick: () => console.log("Siri clicked"),
    },
    {
      title: "LaunchPad",
      icon: "/icons/launchpad.png",
      onClick: () => console.log("LaunchPad clicked"),
    },
    {
      title: "Contacts",
      icon: "/icons/contacts.png",
      onClick: () => console.log("Contacts clicked"),
    },
    {
      title: "Notes",
      icon: "/icons/notes.png",
      onClick: () => console.log("Notes clicked"),
    },
    {
      title: "Reminders",
      icon: "/icons/reminders.png",
      onClick: () => console.log("Reminders clicked"),
    },
    {
      title: "Photos",
      icon: "/icons/photos.png",
      onClick: () => console.log("Photos clicked"),
    },
    {
      title: "Messages",
      icon: "/icons/messages.png",
      onClick: () => console.log("Messages clicked"),
    },
    {
      title: "FaceTime",
      icon: "/icons/facetime.png",
      onClick: () => console.log("FaceTime clicked"),
    },
    {
      title: "Music",
      icon: "/icons/music.png",
      onClick: () => console.log("Music clicked"),
    },
    {
      title: "Podcasts",
      icon: "/icons/podcasts.png",
      onClick: () => console.log("Podcasts clicked"),
    },
    {
      title: "TV",
      icon: "/icons/tv.png",
      onClick: () => console.log("TV clicked"),
    },
    {
      title: "App Store",
      icon: "/icons/appstore.png",
      onClick: () => console.log("App Store clicked"),
    },
    {
      title: "Safari",
      icon: "/icons/safari.png",
      onClick: () => console.log("Safari clicked"),
    },
    {
      title: "Bin",
      icon: "/icons/trash.png",
      onClick: () => console.log("Bin clicked"),
    },
  ];

  useEffect(() => {
    let icons = document.querySelectorAll(".ico");
    let length = icons.length;

    icons.forEach((item, index) => {
      item.addEventListener("mouseover", (e) => {
        focus(e.target as HTMLElement, index);
      });
      item.addEventListener("mouseleave", (e) => {
        icons.forEach((item) => {
          (item as HTMLElement).style.transform = "scale(1)  translateY(0px)";
        });
      });
    });

    const focus = (elem: HTMLElement, index: number) => {
      let previous = index - 1;
      let previous1 = index - 2;
      let next = index + 1;
      let next2 = index + 2;

      if (previous == -1) {
        console.log("first element");
        elem.style.transform = "scale(1.5)  translateY(-10px)";
      } else if (next == length) {
        elem.style.transform = "scale(1.5)  translateY(-10px)";
        console.log("last element");
      } else {
        try {
          elem.style.transform = "scale(1.5)  translateY(-10px)";
          (icons[previous] as HTMLElement).style.transform =
            "scale(1.2) translateY(-6px)";
          (icons[previous1] as HTMLElement).style.transform = "scale(1.1)";
          (icons[next] as HTMLElement).style.transform =
            "scale(1.2) translateY(-6px)";
          (icons[next2] as HTMLElement).style.transform = "scale(1.1)";
        } catch (e) {
          console.log(e);
        }
      }
    };
  }, []);
  return (
    <div className="w-auto h-15 rounded-xl flex justify-center absolute bottom-5 left-1/2 -translate-x-1/2">
      <div className="p-1 w-auto h-full flex items-center justify-center rounded-xl bg-gray-500 bg-opacity-25 backdrop-blur-sm border-[0.1px] border-gray-400 border-opacity-18">
        {list.map((item, index) => {
          return (
            <li
              key={item.title}
              className={`flex items-center justify-center min-w-12 w-12.5 h-12.5
               align-bottom transition-transform duration-200 origin-bottom hover:mx-3.25 group`}
            >
              <div className="absolute top-[-70px] bg-black bg-opacity-50 text-white text-opacity-90 h-2.5 py-2.5 px-3.5 flex items-center justify-center rounded invisible group-hover:visible after:content-[''] after:absolute after:bottom-[-4px] after:w-0 after:h-0 after:backdrop-blur-sm after:border-l-4 after:border-l-transparent after:border-r-4 after:border-r-transparent after:border-t-4 after:border-t-black after:opacity-50">
                {item.title}
              </div>

              <img
                src={item.icon}
                alt={item.title}
                className="ico w-full h-full object-cover transition-transform duration-200"
              />
            </li>
          );
        })}
      </div>
    </div>
  );
};
// {/* <div className="w-auto h-15 rounded-xl flex justify-center absolute bottom-5 left-1/2 -translate-x-1/2">
//   <div className="p-1 w-auto h-full flex items-center justify-center rounded-xl bg-gray-500 bg-opacity-25 backdrop-blur-sm border border-white border-opacity-18">
//     {list.map((item, index) => {
//       const isLastItem = index === list.length - 1;
//       return (
//         <li
//           key={`${item.title}-${index}`}
//           onClick={item.onClick}
//           className={
//             isLastItem
//               ? `ml-5 border-l border-white border-opacity-40 px-2.5`
//               : ``
//           }
//         >
//           <div className="name">{item.title}</div>
//           <img className="ico" src={item.icon} alt={item.title} />
//         </li>
//       );
//     })}
//   </div>
// </div> */}
// {/* <div className="w-auto h-15 rounded-xl flex justify-center absolute bottom-5 left-1/2 -translate-x-1/2">
//   <div className="p-1 w-auto h-full flex items-center justify-center rounded-xl bg-gray-500 bg-opacity-25 backdrop-blur-sm border border-white border-opacity-18">
//     {list.map((item, index) => {
//       const isLastItem = index === list.length - 1;
//       return (
//         <li
//           key={`${item.title}-${index}`}
//           onClick={item.onClick}
//           className={
//             isLastItem
//               ? `ml-5 border-l border-white border-opacity-40 px-2.5`
//               : ``
//           }
//         >
//           <div className="name">{item.title}</div>
//           <img className="ico" src={item.icon} alt={item.title} />
//         </li>
//       );
//     })}
//   </div>
// </div> */}

export default Dock;
