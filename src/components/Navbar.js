"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { DarkMode, LightMode, MenuClose, MenuOpen } from "./Assets";
import { setCookie } from "cookies-next";
import { THEME_KEY } from "@/lib/theme";

const navLinks = [
  { title: "About", id: "#about" },
  { title: "Project", id: "#project" },
  { title: "Contact", id: "#contact" },
];

const Navbar = () => {
  const toggleDarkMode = () => {
    const html = document.body.parentElement;
    if (html.classList.contains("dark")) {
      setCookie(THEME_KEY, "light");
    } else {
      setCookie(THEME_KEY, "dark");
    }
    html.classList.toggle("dark");
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="container mx-auto my-6">
      <div className="flex justify-between items-center">
        <div>
          <Image
            src="/images/AMDark.png"
            alt="Logo"
            width={60}
            height={60}
            className="hidden dark:block cursor-pointer"
          />
          <Image
            src="/images/AMLight.png"
            alt="Logo"
            width={60}
            height={60}
            className="block dark:hidden"
          />
        </div>

        <ul className="hidden sm:flex items-center gap-9">
          {navLinks.map((item) => (
            <li key={item.id}>
              <Button intent="secondary" size="small" shape="rounded">
                {item.title}
              </Button>
            </li>
          ))}
        </ul>

        <button onClick={toggleDarkMode} className="hidden sm:block">
          <div className="dark:hidden block">
            <LightMode />
          </div>
          <div className="dark:block hidden">
            <DarkMode />
          </div>
        </button>

        {menuOpen && (
          <div className="md:hidden">
            <div
              className={`flex flex-col items-center justify-center absolute gap-[30px] bg-darkColor2 top-[140px] ease-in duration-300 z-30 lg:hidden
            ${
              menuOpen
                ? "inset-0"
                : "left-[-100%] inset-0"
            }
            `}
            >
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.id}
                  className="text-primary-darkest"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="md:hidden z-10">
          <button onClick={handleMenuToggle}>
            {menuOpen ? <MenuClose /> : <MenuOpen />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
