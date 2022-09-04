import React from "react";
import { PopupButton } from "@typeform/embed-react";
import { Logo } from "../../index";

export const Menu = () => {
  return (
    <header className="relative bg-white">
      <nav aria-label="Top" className="max-w-7xl mx-auto">
        <div className="border-b flex justify-between py-6 border-gray-200">
          <div className="h-full flex space-x-8">
            <Logo className="w-20" />
            <PopupButton id="kdU1E3B5">
              <p className="w-full mb-0 hover:text-yellow-600">Soy negocio</p>
            </PopupButton>
            <PopupButton id="rxSrgVVL">
              <p className="w-full hover:text-yellow-600">Soy consumidor</p>
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
      </nav>
    </header>
  );
};
