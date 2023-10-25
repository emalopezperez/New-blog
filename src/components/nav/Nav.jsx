"use client";
import { Disclosure } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./components/themeToggle/ThemeToggle";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Recursos", href: "/", current: false },
  { name: "Sobre mi", href: "/about", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="">
      { ({ open }) => (
        <>
          <div className="w-full ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center  ">
                  { open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={ 1.5 }
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                      />
                    </svg>
                  ) }
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center ">
                  <Link href="/">
                    <h1 className="text-3xl text-bold">Blog</h1>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 gap-3 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ThemeToggle />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-black/90 fixed top-16 z-20 w-[70%] h-[60%] rigth-0 rounded-md">
            <div className="space-y-1  pb-3 pt-2">
              { navigation.map((item) => (
                <Disclosure.Button
                  key={ item.name }
                  as="a"
                  href={ item.href }
                  className={ classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  ) }
                  aria-current={ item.current ? "page" : undefined }>
                  { item.name }
                </Disclosure.Button>
              )) }

              <div className="flex xl:hidden"></div>
            </div>
          </Disclosure.Panel>
        </>
      ) }
    </Disclosure>
  );
}
