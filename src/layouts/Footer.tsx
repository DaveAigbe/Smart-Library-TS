import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";

interface Props {}

const Footer: FunctionComponent<Props> = () => {
  return (
    <footer
      className={
        "flex min-h-fit w-full items-center justify-center gap-5 bg-brown-400 text-main-txt"
      }
    >
      <p className={"text-sm"}>© Copyright 2023 by Dave Aigbe</p>
      <section className={"flex gap-2"}>
        <a
          href="https://github.com/DaveAigbe"
          rel={"noreferrer"}
          target={"_blank"}
          tabIndex={0}
          aria-label={"Link to Github"}
        >
          <Icon
            icon="mdi:github"
            className={"cursor-pointer hover:animate-spin"}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/daveaigbejr"
          rel={"noreferrer"}
          target={"_blank"}
          tabIndex={1}
          aria-label={"Link to LinkedIn"}
        >
          <Icon
            icon="mdi:linkedin"
            className={"cursor-pointer hover:animate-spin"}
          />
        </a>
        <a
          href="https://www.daveaigbe.live"
          rel={"noreferrer"}
          target={"_blank"}
          tabIndex={2}
          aria-label={"Link to Portfolio Website"}
        >
          <Icon
            icon="dashicons:admin-site-alt3"
            className={"cursor-pointer hover:animate-spin"}
          />
        </a>
        <a
          href="mailto:davesprogrammingcs@gmail.com"
          aria-label={"Link to Email"}
          tabIndex={3}
        >
          <Icon
            icon="mdi:email"
            className={"cursor-pointer hover:animate-spin"}
          />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
