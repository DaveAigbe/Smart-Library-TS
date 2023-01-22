import React, {FC, ReactNode} from "react";

interface Props {
    children?: ReactNode
}

const Layout: FC<Props> = ({children}) => {

    return (
        <main
            className={`min-w-screen flex min-h-screen flex-col items-center justify-center gap-10 p-10 font-roboto bg-cover bg-no-repeat bg-brown-wave`}
        >
            {children}
        </main>
    );
};

export default Layout
