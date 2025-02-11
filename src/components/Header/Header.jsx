import React from "react";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // sticky top-0 z-999
    <header className="bg-[#121A1E]  rounded-b-4xl"> 
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-[1400px] items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <NavLink href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="/assets/logo/logo.svg" className="h-12 w-auto" />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon
              aria-hidden="true"
              className="size-7 text-[#fff] border rounded-xs "
            />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 text-white">
          <Popover className="relative"></Popover>

          <NavLink to={""} className="text-sm/6 tracking-wide !text-white">
            Возможности
          </NavLink>
          <NavLink
            to={""}
            href="#"
            className="text-sm/6 tracking-wide !text-white"
          >
            Преимущества
          </NavLink>
          <NavLink
            to={""}
            href="#"
            className="text-sm/6 tracking-wide !text-white"
          >
            Кому подойдет
          </NavLink>
          <NavLink
            to={""}
            href="#"
            className="text-sm/6 tracking-wide !text-white"
          >
            FAQ
          </NavLink>
        </PopoverGroup>
        <div className="hidden  lg:flex lg:flex-1 lg:justify-end ">
          <button className="w-fit bg-[#72E484] p-2 px-3 font-semibold rounded-full text-sm cursor-pointer">
            Связаться с нами
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#121A1E] text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to={""} className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/assets/logo/logo.svg" className="h-12 w-auto" />
            </NavLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6 text-white" />
            </button>
          </div>
          <div className="mt-6 flow-root ">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to={""}
                  className="text-sm/6 tracking-wide block !text-white"
                >
                  Возможности
                </NavLink>
                <NavLink
                  to={""}
                  href="#"
                  className="text-sm/6 tracking-wide block !text-white"
                >
                  Преимущества
                </NavLink>
                <NavLink
                  to={""}
                  href="#"
                  className="text-sm/6 tracking-wide block !text-white"
                >
                  Кому подойдет
                </NavLink>
                <NavLink
                  to={""}
                  href="#"
                  className="text-sm/6 tracking-wide block !text-white"
                >
                  FAQ
                </NavLink>
              </div>
              <div className="py-6">
                <button className="w-fit bg-[#72E484] p-2 px-3 font-semibold text-black rounded-full text-sm cursor-pointer">
                  Связаться с нами
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
