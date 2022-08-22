/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";
import { Logo } from "../../Logo";

export const Desktop = ({ navigation }) => {
  const [_open, setOpen] = useState(false);
  return (
    <header className="relative bg-white">
      <nav aria-label="Top" className="max-w-7xl mx-auto">
        <div className="border-b border-gray-200">
          <div className="h-16 flex items-center">
            <button
              type="button"
              className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Abrir menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <Logo className="w-20" />
            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="h-full flex space-x-8">
                {navigation.pages.map((page) => (
                  <a
                    key={page.name}
                    href={page.href}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    {page.name}
                  </a>
                ))}
              </div>
            </Popover.Group>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a
                  href="/signup"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Iniciar sesión
                </a>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <a
                  href="/register"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Crear cuenta
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
