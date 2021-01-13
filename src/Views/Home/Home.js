import React from 'react';
import { withRouter } from 'react-router';
import { PageHeader } from '../../Components';

const HomePage = (props) => {
  return (
    <>
      <div>
        <PageHeader Text='Home' />
      </div>
    </>
  );
};
const Home = withRouter(HomePage);
export default Home;
