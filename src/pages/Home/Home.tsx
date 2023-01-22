import React, { FunctionComponent } from 'react';
import Introduction from "./Introduction";

interface Props {}

const Home: FunctionComponent<Props> = () => {
  return (
      <div>
          <Introduction/>
      </div>
  );
};

export default Home;
