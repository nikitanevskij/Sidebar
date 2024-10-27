import React from "react";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/consts/navigation";
import { Atom, PanelLeftOpen } from "lucide-react";
import { SidebarLink } from "./SidebarLink";

export const Sidebar: React.FC = () => {
  const [openSidebar, setOpen] = React.useState(true);

  return (
    <div
      className={`flex flex-col bg-neutral-900 h-screen p-5 pt-8 ${
        openSidebar ? "w-72" : "w-20"
      } duration-300`}
    >
      <div className="flex items-center px-3">
        <div>
          <Atom
            size={30}
            color="#ffffff"
            className={`cursor-pointer block float-left mr-2 ${
              openSidebar && "rotate-[360deg]"
            } duration-500`}
          />
        </div>

        <h1
          className={`text-white origin-left font-medium text-2xl ${
            !openSidebar && "scale-0"
          } duration-300`}
        >
          LOGO
        </h1>
      </div>

      <div className="flex-1 py-8 flex flex-col gap-0.5">
        <ul>
          {DASHBOARD_SIDEBAR_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} openSidebar={openSidebar} />
          ))}
        </ul>
      </div>
      <div className="px-3">
        <PanelLeftOpen
          color="#ffffff"
          className={`flex cursor-pointer ${openSidebar && "rotate-180"}  `}
          onClick={() => setOpen(!openSidebar)}
        />
      </div>
    </div>
  );
};
