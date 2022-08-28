import React from "react";
import { PopupButton } from "@typeform/embed-react";
import { Logo } from "../../index";

export const Menu = () => {
  return (
    <header className="relative bg-white">
      <nav aria-label="Top" className="max-w-7xl mx-auto">
        <div className="border-b flex py-6 border-gray-200">
          <Logo className="w-20" />
          <div className="h-full flex space-x-8">
            <PopupButton id="kdU1E3B5">
              <p className="w-full mb-4 md:mb-0 hover:text-yellow-600">
                Para negocios
              </p>
            </PopupButton>
            <PopupButton id="rxSrgVVL">
              <p className="w-full hover:text-yellow-600">Para consumidores</p>
            </PopupButton>
          </div>
        </div>
      </nav>
    </header>
  );
};
