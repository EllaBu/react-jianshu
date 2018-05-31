import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from 'nav/Nav.js'
import Home from 'view/home/Home.js'
import S from './style.scss'
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className={S.layout}>
        <Nav />
        <Route to="/" component={Home}></Route>
      </div>
    );
  }
}

export default Layout;