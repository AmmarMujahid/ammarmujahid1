import React from "react";
import { Typography } from "./typography/Typography";
import { Button } from "./Button";
import Image from "next/image";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section className="container mx-auto my-12" id="project">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-12">
          <div>
            <Typography intent="secondary" size="medium" fontWeight="medium">
              Projects
            </Typography>
          </div>

          <div className="flex items-center gap-14">
            <Button intent="secondary" size="small" shape="rounded">
              All Projects
            </Button>
            <Button intent="secondary" size="small" shape="rounded">
              Frontend
            </Button>
            <Button intent="secondary" size="small" shape="rounded">
              Mathematics
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-24">
          <ProjectsCard
            picture="/images/portfolio.png"
            title="Portfolio"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit." 
          />
          <ProjectsCard
            picture="/images/localhost.png"
            title="Localhost"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
          <ProjectsCard
            picture="/images/healnet.png"
            title="Healnet"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
          <ProjectsCard
            picture="/images/digitalmarketing.png"
            title="Digital Marketing"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
          <ProjectsCard
            picture="/images/themathematicsoutlet.png"
            title="The Mathematics Outlet"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
        </div>

        <div>
          <Button intent="primary" size="small">
            View all Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
