"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./Button";
import { Typography } from "./typography/Typography";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container mx-auto my-12">
      <div className="flex justify-between items-center max-md:flex-col max-md:gap-16">
        <div className="flex flex-col gap-10 basis-2/3">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-1.5">
              <Typography intent="tertiary" size="small">
                Hi, I'm
              </Typography>

              <Typography intent="secondary" size="small" fontWeight="bold">
                Ammar Mujahid
              </Typography>
            </div>

            <Typography intent="primary" fontWeight="medium">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  1000,
                  "Mathematics Educator",
                  1000,
                  "Youtube Content Creator",
                  1000,
                ]}
                wrapper="span"
                speed={200}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </Typography>

            <Typography>
              With an MS in Mathematics and more than 2 years of experience in
              teaching, I have transitioned into front-end development while
              continuing to engage with my passion for mathematics. I am
              proficient in creating dynamic web applications using React.js and
              Tailwind CSS. I invite you to explore my portfolio to see my
              contributions to both fields.
            </Typography>
          </div>

          <div className="flex gap-14 items-center">
            <Button intent="primary" shape="rounded">
              <Link href="https://www.linkedin.com/in/ammarmujahid/">
                Get in Touch
              </Link>
            </Button>

            <div className="flex gap-3 items-center">
              <span className="bg-primary-dark dark:bg-primary w-3 h-3 rounded-full"></span>
              <span>
                <Typography fontWeight="normal">Available now</Typography>
              </span>
            </div>
          </div>
        </div>

        <div>
          <Image
            src="/images/HeroDark.png"
            alt="Hero image"
            width={320}
            height={320}
            className="hidden dark:block"
          />
          <Image
            src="/images/HeroLight.png"
            alt="Hero image"
            width={320}
            height={320}
            className="block dark:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
