import React, {FunctionComponent} from 'react';
import Description from "./Description";
import {Icon} from "@iconify/react";

interface Props {
}

const Introduction: FunctionComponent<Props> = () => {
    return (
        <section className={'my-14 md:my-36 md:max-w-6xl lg:text-left'}>
            <div
                className={"mb-10 flex justify-center gap-4 text-4xl font-bold tracking-wide text-main-header sm:text-5xl md:text-8xl "}
            >
                <h1>Smart Library</h1>
                <Icon icon="game-icons:bookshelf" />
            </div>
            <div
                className={"flex flex-col gap-4 leading-loose text-main-pg sm:text-lg md:flex-row md:text-xl "}
            >
                <Description/>
            </div>
        </section>
    );
};

export default Introduction;
