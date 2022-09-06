import React, { useState } from "react";
import { PopupButton } from "@typeform/embed-react";
import { MenuAlt3Icon } from "@heroicons/react/outline";
import { Logo } from "../../index";

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="relative bg-white">
      <nav aria-label="Top" className="max-w-7xl mx-auto">
        <div className="border-b md:flex justify-between py-6 border-gray-200 hidden">
          <div className="h-full flex space-x-8">
            <Logo className="w-20" />
            <PopupButton id="kdU1E3B5">
              <p className="w-full mb-0 hover:text-yellow-600">
                Tengo un negocio
              </p>
            </PopupButton>
            <PopupButton id="rxSrgVVL">
              <p className="w-full hover:text-yellow-600">Quiero probar</p>
            </PopupButton>
          </div>
          <div>
            <a
              href="/business/register"
              className="w-full mb-0 hover:cursor-pointer hover:text-yellow-600"
            >
              Crear cuenta
            </a>
          </div>
        </div>
        <div className="border-b md:hidden justify-between py-6 border-gray-200 flex">
          <Logo className="w-20" />
          <div onClick={() => setShowMenu(!showMenu)}>
            <MenuAlt3Icon className="h-8 w-8 hover:text-yellow-600 hover:cursor-pointer" />
          </div>
        </div>
        {showMenu && (
          <aside className="absolute md:hidden z-50 w-full p-8 bg-white rounded-b shadow-md">
            <ul className="flex flex-col">
              <PopupButton id="kdU1E3B5">
                <li className="text-left mb-6 hover:cursor-pointer hover:text-yellow-600">
                  Tengo un negocio
                </li>
              </PopupButton>
              <PopupButton id="rxSrgVVL">
                <li className="text-left hover:cursor-pointer hover:text-yellow-600">
                  Quiero probar
                </li>
              </PopupButton>
            </ul>
          </aside>
        )}
      </nav>
    </header>
  );
};
