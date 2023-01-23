import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";

interface Props {}

const Footer: FunctionComponent<Props> = () => {
  return (
    <footer
      className={
        "fixed bottom-0 left-0 right-0 flex items-center justify-center gap-5 bg-brown-400 text-main-txt"
      }
    >
      <p className={"text-sm"}>© Copyright 2023 by Dave Aigbe</p>
      <section className={"flex gap-2"}>
        <a
          href="https://github.com/DaveAigbe"
          rel={"noreferrer"}
          target={"_blank"}
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
        >
          <Icon
            icon="dashicons:admin-site-alt3"
            className={"cursor-pointer hover:animate-spin"}
          />
        </a>
        <a href="mailto:davesprogrammingcs@gmail.com">
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
