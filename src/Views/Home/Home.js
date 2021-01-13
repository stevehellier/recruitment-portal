import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { SideNav} from '../../Components';
import { PageHeader } from '../../Components';
// import './style/Dashboard.css';

const HomePage = (props) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} id='sidebar-wrapper'>
            <SideNav />
          </Col>
          <Col xs={10} id='page-content-wrapper'>
          <PageHeader Text='Home' />
          </Col>
        </Row>
      </Container>
    </>
  );
};
const Home = withRouter(HomePage);
export default Home;
