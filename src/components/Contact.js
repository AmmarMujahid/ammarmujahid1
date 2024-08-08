import React from "react";
import { Typography } from "./typography/Typography";
import { Button } from "./Button";
import { SendMessage } from "./Assets";

const Contact = () => {
  return (
    <section className="container mx-auto my-12" id="contact">
      <div className="flex flex-col items-center gap-16">
        <div>
          <Typography intent="secondary" size="medium" fontWeight="medium">
            Get In Touch
          </Typography>
        </div>

        <div className="flex items-center">
          <div
            style={{ backgroundImage: `url('/images/contact.png')` }}
            className="w-[676px] h-[760px] bg-cover rounded-l-xl flex items-center justify-start pl-20"
          >
            <h1 className="text-secondary-lightGray text-[56px] italic font-bold">
              Lets discuss <br /> on something{" "}
              <span className="text-[#5598EE] dark:text-primary">cool</span>{" "}
              <br />
              together
            </h1>
          </div>

          <div className="w-[676px] h-[760px] bg-white rounded-r-xl p-12">
            <div className="mb-6">
              <p>Im interested in</p>
            </div>

            <div className="flex items-center gap-4">
              <Button intent="tertiary" shape="rounded">
                Frontend
              </Button>
              <Button intent="primary" shape="rounded">
                Mathematics
              </Button>
            </div>

            <div className="flex flex-col gap-16 my-24">
              <input
                type="text"
                placeholder="Name"
                className="outline-none border-b-2 border-secondary-darkGrayishBrown focus:border-primary-darkest"
              />
              <input
                type="text"
                placeholder="Email"
                className="outline-none border-b-2 border-secondary-darkGrayishBrown focus:border-primary-darkest"
              />
              <input
                type="text"
                placeholder="Message"
                className="outline-none border-b-2 border-secondary-darkGrayishBrown focus:border-primary-darkest"
              />
            </div>

            <div>
              <Button
                intent="primary"
                className="flex items-center gap-4"
                shape="rounded"
              >
                <SendMessage />
                <span>Send Message</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
