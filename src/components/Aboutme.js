import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import { Typography } from "./typography/Typography";

const skillsData = [
  { picture: "/images/html.svg", title: "HTML" },
  { picture: "/images/css.svg", title: "CSS" },
  { picture: "/images/tailwindcss.svg", title: "Tailwind" },
  { picture: "/images/js.svg", title: "Javascript" },
  { picture: "/images/react.svg", title: "React" },
  { picture: "/images/next.svg", title: "Next" },
];

const Aboutme = () => {
  return (
    <section className="container mx-auto my-12" id="about">
      <div className="flex justify-between items-center gap-24">
        <div className="flex-1">
          <Image
            src="/images/AboutDark.png"
            alt="Hero image"
            width={440}
            height={330}
            className="hidden dark:block"
          />
          <Image
            src="/images/AboutLight.png"
            alt="Hero image"
            width={440}
            height={330}
            className="block dark:hidden"
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-col items-start mb-6">
            <Typography intent="secondary" size="medium" fontWeight="medium">
              About Me
            </Typography>
            <Typography
              intent="primary"
              size="extrasmall"
              fontWeight="bold"
              className=""
            >
              __ Who am I?
            </Typography>
          </div>

          <div>
            <Typography className="text-left">
              I hold a Master's degree in Mathematics and have over two years of
              teaching experience in higher education. Currently, I am focused
              on front-end development, specializing in React.js and Tailwind
              CSS. I am passionate about crafting user-friendly web applications
              and am eager to embrace new challenges in the tech industry. The
              following are tech stacks that I use regularly:
            </Typography>
          </div>

          <div className="flex items-center gap-10 my-12">
            {skillsData.map((item, index) => (
              <ul key={index} className="flex flex-col gap-1 items-center">
                <li>
                  <Image
                    src={item.picture}
                    alt={item.title}
                    width={40}
                    height={40}
                  />
                </li>
                <Typography intent="tertiary" size="normal" fontWeight="normal">
                  {item.title}
                </Typography>
              </ul>
            ))}
          </div>

          <div>
            <Typography
              intent="primary"
              size="small"
              fontWeight="medium"
              className="border-primary-dark dark:border-primary border-2 px-4 py-1.5 hover:scale-105 duration-300"
            >
              Download Resume
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
