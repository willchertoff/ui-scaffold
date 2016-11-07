import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import App from '../components/App';

class AppContainer extends Component {
  render() {
    return (
      <App {...this.props} />
    );
  }
}

function mapStateToProps(state, { params }) {
  const { message } = state;
  return {
    panel: params.panel || 'photo-stream',
    message,
  };
}

export default withRouter(connect(mapStateToProps)(AppContainer));
