/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

export default function Nav() {
  return (
    <Popover className="relative z-20">
      {({ open }) => (
        <>
          <div id="home" className="mx-auto max-w-7xl px-6">
            <div className="flex flex-row items-center justify-between py-6 pt-16 md:pt-24">
              <div className="flex items-center justify-start md:-ml-0 md:pl-10">
                <img src="/logoT.png" alt="Logo" className="h-20" />
              </div>
              <div className="-my-2 md:hidden">
                <Popover.Button className="text-primary inline-flex items-center justify-center rounded-md p-2 hover:text-primaryDark focus:outline-none">
                  <span className="sr-only">Open menu</span>
                  <HiMenu className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <nav className="hidden items-center justify-center space-x-14 md:flex">
                <a
                  href="#features"
                  className="trans text-lg font-medium text-[#8FA2AD] hover:text-primary-light"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="trans text-lg font-medium text-[#8FA2AD] hover:text-primary-light"
                >
                  Pricing
                </a>
                <a
                  href="#faq"
                  className="trans text-lg font-medium text-[#8FA2AD] hover:text-primary-light"
                >
                  FAQ
                </a>
                <a
                  href="#contact"
                  className="trans text-lg font-medium text-[#8FA2AD] hover:text-primary-light"
                >
                  Contact
                </a>
                <a
                  href="https://discord.gg/KJnHtqfZHD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trans text-lg font-medium text-[#8FA2AD] hover:text-primary-light"
                >
                  Discord
                </a>
              </nav>
              <div className="hidden items-center justify-end space-x-5 pr-10 text-sm md:flex">
                <a
                  href="/dashboard"
                  className="trans rounded-md bg-primary-default py-3 px-5 text-lg font-medium hover:bg-primary-light"
                >
                  Dashboard
                </a>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="rounded-lg bg-background shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div className="relative h-16 w-16">
                      <Image
                        src="/logoT.png"
                        alt="Logo"
                        layout="fill"
                        className=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="text-primary inline-flex items-center justify-center rounded-md p-2 hover:text-primaryDark focus:outline-none">
                        <span className="sr-only">Close menu</span>
                        <HiX className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      <a
                        href="#features"
                        className="-m-3 flex items-center rounded-md p-3"
                      >
                        <span className="ml-3 text-base font-medium text-white">
                          Features
                        </span>
                      </a>
                      <a
                        href="#pricing"
                        className="-m-3 flex items-center rounded-md p-3"
                      >
                        <span className="ml-3 text-base font-medium text-white">
                          Pricing
                        </span>
                      </a>
                      <a
                        href="#faq"
                        className="-m-3 flex items-center rounded-md p-3"
                      >
                        <span className="ml-3 text-base font-medium text-white">
                          FAQ
                        </span>
                      </a>
                      <a
                        href="#contact"
                        className="-m-3 flex items-center rounded-md p-3"
                      >
                        <span className="text-gradStart ml-3 text-base font-medium">
                          Contact
                        </span>
                      </a>
                      <a
                        href="https://discord.gg/KJnHtqfZHD"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="-m-3 flex items-center rounded-md p-3"
                      >
                        <span className="text-gradStart ml-3 text-base font-medium">
                          Discord
                        </span>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
