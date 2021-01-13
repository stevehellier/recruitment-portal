import React from 'react';
import { Nav } from 'react-bootstrap';
import { withRouter } from 'react-router';

const Side = (props) => {
  return (
    <>
      <Nav
        className='col-md-12 d-none d-md-block bg-light sidebar'
        activeKey='/home'
      >
        <div className='sidebar-sticky'></div>
        <Nav.Item>
          <Nav.Link href='/'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/contract-stats'>Contract</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/perm-stats'>Perm</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
const SideNav = withRouter(Side);
export default SideNav;
