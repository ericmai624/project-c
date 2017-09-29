import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import Calendar from '../components/Calendar/Calendar';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../reducers';

class Index extends Component {
  static async getInitialProps({ store, req, isServer }) {
    return { isServer };
  }

  render() {
    return (
      <Layout>
        <Calendar />
      </Layout>
    );
  }
}

export default withRedux(makeStore)(Index);