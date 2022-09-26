import React, { useState } from "react";
import { MenuAlt3Icon } from "@heroicons/react/outline";
import { Logo } from "../../index";

export const MenuLanding = ({ onClick }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="relative bg-white">
      <nav aria-label="Top" className="max-w-7xl mx-auto">
        <div className="border-b md:flex py-6 border-gray-200 hidden">
          <div className="h-full w-full flex">
            <Logo className="w-20" />
            <p
              onClick={(e) => onClick(e, "/business")}
              className="ml-6 hover:text-yellow-600 hover:cursor-pointer"
            >
              Tengo un negocio
            </p>
            <p
              onClick={(e) => onClick(e, "/customers")}
              className="ml-6 hover:text-yellow-600 hover:cursor-pointer"
            >
              Quiero probar
            </p>
          </div>
        </div>
        <div className="border-b md:hidden justify-between py-6 border-gray-200 flex">
          <Logo className="w-20" />
          <div onClick={() => setShowMenu(!showMenu)}>
            <MenuAlt3Icon className="h-8 w-8 hover:text-yellow-600 hover:cursor-pointer" />
          </div>
        </div>
        {showMenu && (
          <aside className="absolute md:hidden z-100 bg-white w-full p-8 rounded-b shadow-md">
            <ul className="flex flex-col">
              <li
                onClick={(e) => onClick(e, "/business")}
                className="text-left mb-6 hover:cursor-pointer hover:text-yellow-600"
              >
                Tengo un negocio
              </li>
              <li
                onClick={(e) => onClick(e, "/customers")}
                className="text-left hover:cursor-pointer hover:text-yellow-600"
              >
                Quiero probar
              </li>
            </ul>
          </aside>
        )}
      </nav>
    </header>
  );
};
