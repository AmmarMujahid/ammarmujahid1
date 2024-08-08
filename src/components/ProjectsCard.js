import React from "react";
import { Typography } from "./typography/Typography";
import { Button } from "./Button";
import Image from "next/image";

const Projects = ({ picture, title, description }) => {
  return (
    <section className="container mx-auto my-12 w-[440px] h-[630px] dark:bg-primary-dark border-2 border-primary-dark rounded-3xl hover:scale-105 transition ">
      <div className="flex flex-col justify-between">
        <div>
          <Image
            src={picture}
            alt="js"
            width={440}
            height={300}
            className="rounded-t-3xl w-[565px] h-[255px]"
          />
        </div>

        <div className="px-10 pb-7 flex flex-col items-center gap-6">
          <div className="flex flex-col items-center">
            <Typography intent="secondary" size="medium">
              {title}
            </Typography>

            <Typography>{description}</Typography>
          </div>

          <div className="flex flex-col items-center">
            <Typography intent="secondary" size="small" fontWeight="bold">
              Technologies Used
            </Typography>
            <div className="flex items-center gap-8">
              <Image
                src="/images/next.svg"
                alt="react"
                width={24}
                height={24}
              />
              <Image src="/images/js.svg" alt="js" width={24} height={24} />
              <Image
                src="/images/tailwindcss.svg"
                alt="tailwind"
                width={24}
                height={24}
              />
            </div>
          </div>

          <div className="flex items-center gap-8">
            <Button intent="primary" size="small">
              View Live Demo
            </Button>
            <Button intent="secondary" size="small">
              Visit Site
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
