import React, { Component} from 'react';

import './PageHeader.css';

class PageHeader extends Component {
  render() {
    return (
      <div id='page-header'>
        <h1>{this.props.Text}</h1>
      </div>
    )
  }
}

export default PageHeader;