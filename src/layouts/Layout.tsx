import React, {FC, ReactNode} from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
    children?: ReactNode
}

const Layout: FC<Props> = ({children}) => {

    return (
        <div
            className={'min-w-screen min-h-screen flex flex-col items-center justify-center p-10 font-roboto bg-cover bg-no-repeat bg-brown-wave'}>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout
