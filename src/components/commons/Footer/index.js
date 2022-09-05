import React from "react";
import { Logo } from "../../index";

export const Footer = () => {
  return (
    <footer className="relative bg-white">
      <nav aria-label="Top" className="max-w-7xl mx-auto">
        <div className="border-t border-gray-200 py-8">
          <div className="h-16 grid grid-cols-1 md:grid-cols-4">
            <Logo className="w-20" />
            <div className="grid my-8 md:my-0">
              <a
                href="#"
                className="text-base text-gray-600 hover:text-purple-600 font-bold mb-2"
              >
                Terminos y condiciones
              </a>
              <a
                href="#"
                className="text-base text-gray-600 hover:text-purple-600 font-bold"
              >
                Politica de privacidad
              </a>
            </div>
            <div className="grid">
              <p className="text-sm text-gray-500">Copyright © Sunky.</p>
              <p className="text-sm text-gray-500">All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};
