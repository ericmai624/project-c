import React, { Component } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Nav from '../Nav/Nav';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Head>
          <title>Project-C</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css'></link>
        </Head>
        <div className='wrapper'>
          <Nav />
          <div className='content'>{children}</div>
        </div>
        <style jsx>{`
          .wrapper {
            display: grid;
            grid-template-columns: 1fr 6ft 1fr;
            grid-template-rows: 50px 1fr;
          }
          .content {
            grid-column: 2;
            grid-row: 2;
            background: lightgray;
          }
        `}</style>
      </div>
    );
  }
}

export default Layout;