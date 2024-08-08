import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, Xing } from "./Assets";
import { Typography } from "./typography/Typography";
import "../app/globals.css";

const footerLinks = [
  { title: "About", id: "#about" },
  { title: "Project", id: "#project" },
  { title: "Contact", id: "#contact" },
];

const socialLinks = [
  { logo: <Github />, link: "www.google.com" },
  { logo: <Linkedin />, link: "www.google.com" },
  { logo: <Xing />, link: "www.google.com" },
  { logo: <Twitter />, link: "www.google.com" },
];

const Footer = () => {
  return (
    <section className="bg-secondary-aliceBlue dark:bg-primary-dark py-8">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-10">
          <div>
            <Image
              src="/images/AMLight.png"
              alt="Hero image"
              width={80}
              height={80}
              className="block dark:hidden"
            />
            <Image
              src="/images/AMDark.png"
              alt="Hero image"
              width={80}
              height={80}
              className="hidden dark:block"
            />
          </div>

          <div className="flex gap-14 items-center">
            {footerLinks.map((item, index) => (
              <Link href={item.id} key={index}>
                <Typography intent="secondary" size="small">
                  {item.title}
                </Typography>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-10">
            {socialLinks.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-[#343236] rounded-xl shadow-lg dark:border-t-2 dark:border-primary hover:scale-105 duration-300"
              >
                <Link
                  href={item.link}
                  className="inner-shadow custom-drop-shadow"
                >
                  {item.logo}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-secondary-darkGray w-full h-[1px]"></div>

        <div className="">
          <Typography>
            &#169; 2024 Ammar Mujahid. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Footer;
