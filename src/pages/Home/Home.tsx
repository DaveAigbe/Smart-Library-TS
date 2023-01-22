import React, {FunctionComponent} from 'react';
import Introduction from "./Introduction";
import {Link} from "react-router-dom";
import BigButton from "../../components/BigButton";

interface Props {
}

const Home: FunctionComponent<Props> = () => {
    return (
        <div className={'flex justify-center items-center flex-col'}>
            <Introduction/>
            <Link to={'library'}>
                <BigButton content={"Continue to Library ➔"}/>
            </Link>
        </div>
    );
};

export default Home;
