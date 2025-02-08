"use client";


import Link from "next/link";
import {  buttonVariants } from "../ui/button";


import { SheetClose } from "@/components/ui/sheet";
import { Icons } from "./icon";
import Anchor from "./anchor";
import { ThemeToggle } from "./ThemeToggle";
import { MenuIcon } from "lucide-react";



export const NAVLINKS = [
  {
    title: "Docs",
    href: "/docs",
  },

  {
    title: "Components",
    href: "/docs",
  },

  {
    title: "Examples",
    href: "/examples",
  },
  {
    title: "Colors",
    href: "/colors",
  },
];

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 lg:px-4 px-2 backdrop-filter backdrop-blur-xl bg-opacity-5">
      <div className="sm:p-3 p-2 max-w-[1530px] mx-auto h-full flex items-center justify-between gap-2">
        <div className="flex items-center gap-5">
          {/* <SheetLeftbar /> */}
          <div className="flex items-center gap-8">
            <div className="sm:flex ">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className='hidden md:flex'>
                {/* <Search /> */}
              </div>
              <div>
              <Link
                href="https://github.com/ezeslucky/BotNest.git"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <Icons.gitHub className="icon-class w-4" />
              </Link>
              <Link
                href="https://x.com/ezeslucky"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <Icons.twitter className="icon-class w-3" />
              </Link>
              <ThemeToggle />
              </div>

              <aside className=' flex items-center gap-4'>
          
            <Link 
            href="/dashboard"
            className='  relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-50'>

                <span className=' absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_99deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]'/>
                <span className=' inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3  py-1 text-sm font-medium text-white backdrop-blur-3xl'>
{true ? 'Dashboard' : 'Get Started'}
                </span>
            </Link>
            {

            }
            <MenuIcon className='md:hidden' />
        </aside>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      {/* <Icons.logo className="icon-class w-2" /> */}

      <h2 className="text-base md:text-lg font-bold">
       BotNest
      </h2>
      
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="text-black dark:text-white font-semibold"
            absolute
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
