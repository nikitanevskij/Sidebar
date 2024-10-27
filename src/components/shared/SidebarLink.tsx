import React from "react";
import classNames from "classnames";
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  item: any;
  openSidebar: boolean;
}

export const SidebarLink: React.FC<Props> = ({ item, openSidebar }) => {
  const { pathname } = useLocation();
  const [openSubMenu, setOpenSubMenu] = React.useState(false);

  return (
    <li>
      <div
        className="flex items-center justify-between hover:bg-neutral-700 cursor-pointer"
        onClick={() => (item.submenu ? setOpenSubMenu(!openSubMenu) : null)}
      >
        <Link
          to={item.path}
          className={classNames(
            pathname === item.path ? "text-white" : "text-neutral-400",
            "flex items-center gap-2 font-light px-3 py-2",
          )}
        >
          <span className="text-xl float-left">{item.icon}</span>
          <p className={`${!openSidebar && "hidden"} `}>{item.label}</p>
        </Link>
        {item.submenu && (
          <ChevronDown size={18} color="white" className={` ${openSubMenu && "rotate-180"} `} />
        )}
      </div>

      {openSubMenu && openSidebar && (
        <ul>
          {item.submenuItems.map((item) => (
            <li key={item.key}>
              <Link
                to={item.path}
                className={classNames(
                  pathname === item.path ? "text-white" : "text-neutral-400",
                  "px-7 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
