import React, {FunctionComponent} from 'react';
import {Icon} from "@iconify/react";

interface Props {
}

const Footer: FunctionComponent<Props> = () => {
    return (
        <footer className={'fixed bottom-0 bg-brown-400 left-0 right-0 flex justify-center items-center gap-5'}>
            <p>Copyright © Dave Jr. 2022</p>
            <section className={'flex gap-2'}>
                <Icon icon="mdi:github" />
                <Icon icon="mdi:linkedin" />
                <Icon icon="dashicons:admin-site-alt3" />
                <Icon icon="mdi:email" />
            </section>
        </footer>
    );
};

export default Footer;
