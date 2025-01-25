"use client"

const logo = "/assets/img/2.png";

import React, { useEffect, useState } from "react";
import UseAuth from "../hooks/useAuth";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { logoutUser } from "@/actions/auth";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  {
    name: "P.Clínico",
    href: "/PessClinico",
    current: false,
  },
  {
    name: "P.Administrativo",
    href: "/pessAdmin",
    current: false,
  },
  {
    name: "Utentes",
    href: "/Paciente",
    current: false,
  },
  {
    name: "Agenda",
    href: "/agenda",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBarIn = () => {
  const [userInitials, setUserInitials] = useState("RR");

  useEffect(() => {
    const fetchUserInitials = async () => {
      try {
        const response = await fetch("/api/user"); // Endpoint para obter informações do usuário
        const data = await response.json();
        if (data?.nome) {
          const initials = data.nome
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase())
            .join("");
          setUserInitials(initials);
        }
      } catch (error) {
        console.error("Erro ao buscar as iniciais do usuário:", error);
      }
    };

    fetchUserInitials();
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
      window.location.href = "/login";
    } catch (error) {
      console.error("Erro ao deslogar:", error);
      alert("Erro ao realizar logout.");
    }
  };

  return (
    <Disclosure as="nav" className="bg-[#21aeb8]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img alt="Health First" src={logo} className="h-8 w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="ml-96 flex space-x-4">
                {navigation.map((item) => (
                  <div key={item.name} className="relative group">
                    <a
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "hover:bg-blue-300 text-black"
                          : "text-black hover:bg-blue-300 hover:text-black",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                    {item.submenu && (
                      <div className="absolute left-0 hidden group-hover:block mt-2 w-40 rounded-md bg-blue-300 shadow-lg">
                        <ul className="py-1">
                          {item.submenu.map((subItem, index) => (
                            <li key={index}>
                              <a
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-black hover:bg-blue-400"
                              >
                                {subItem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-blue-300 p-1 text-black hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Notificação</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative w-7 h-7 flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-500">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Abrir menu do usuário</span>
                  <span className="text-center"> {userInitials} </span>
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-3 w-44 origin-top-right rounded-md bg-blue-300 py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                <MenuItem>
                  <a
                    href="Paciente/Perfil"
                    className="block px-4 py-2 text-sm text-black hover:bg-blue-400"
                  >
                    Perfil
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-black hover:bg-blue-400"
                  >
                    Definições
                  </a>
                </MenuItem>
                <MenuItem>
                  <button onClick={handleLogout} className="w-44 block px-4 py-2 text-left text-sm text-black hover:bg-blue-400">
                    Sair
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default NavBarIn;
