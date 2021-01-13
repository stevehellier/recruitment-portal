import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import './PageHeader.css';

class PageHeader extends Component {
  render() {
    return (
      <Container fluid>
        <div id='page-header'>
          <h1>{this.props.Text}</h1>
        </div>
      </Container>
    );
  }
}

export default PageHeader;
