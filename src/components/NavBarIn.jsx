"use client"

const logo = "/assets/img/2.png";

import React from "react"
//import { useNavigate } from "react-router-dom";
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
//import ruben from "../assets/img/Ruben.png";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  {
    name: "P.Clínico",
    href: "/PessClinico",
    current: false,
    submenu: [
      { name: "Criar", href: "/PessClinico/criar" },
      { name: "Editar", href: "/PessClinico/editar" },
      { name: "Deletar", href: "/PessClinico/deletar" },
    ],
  },
  {
    name: "P.Administrativo",
    href: "/pessAdmin",
    current: false,
    submenu: [
      { name: "Criar", href: "/pessAdmin/criar" },
      { name: "Editar", href: "/pessAdmin/editar" },
      { name: "Deletar", href: "/pessAdmin/deletar" },
    ],
  },
  {
    name: "Utentes",
    href: "/Paciente",
    current: false,
    submenu: [
      { name: "Criar", href: "/Paciente/criarPaciente" },
      { name: "Editar", href: "/Paciente/editar" },
      { name: "Deletar", href: "/Paciente/deletar" },
    ],
  },
  {
    name: "Agenda",
    href: "/agenda",
    current: false,
    submenu: [
      { name: "Criar", href: "/agenda/criar" },
      { name: "Editar", href: "/agenda/editar" },
      { name: "Deletar", href: "/agenda/deletar" },
    ],
  },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBarIn = () => {
  const { sair } = UseAuth();
  //const navigate = useNavigate();

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
                    {/* Submenu */}
                    {item.submenu && (
  <div className="absolute left-0 hidden group-hover:block mt-2 w-40 rounded-md bg-blue-300 shadow-lg">
    <ul className="py-1">
      {item.submenu.map((subItem, index) => (
        <li key={index}>
          <a
            href={subItem.href} // Certifique-se de que `href` está correto
            className="block px-4 py-2 text-sm text-black hover:bg-blue-400"
          >
            {subItem.name} {/* Acessa a propriedade `name` */}
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
                  {/* <img
                    alt="Ruben"
                    src={ruben}
                    className="size-9 rounded-full"
                  /> */}
                  <span className="text-center"> RR </span>
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-3 w-44 origin-top-right rounded-md bg-blue-300 py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                <MenuItem>
                  <a
                    href="#"
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
                  {/* <a
                    href="#"
                    className="block px-4 py-2 text-sm text-black hover:bg-blue-400"
                  >
                    Sair
                  </a> */}
                  <button onClick={() => [sair(), navigate("/")]} className="w-44 block px-4 py-2 text-left text-sm text-black hover:bg-blue-400">
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
