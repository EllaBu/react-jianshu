import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from 'nav/Nav.js'
import Home from 'view/home/Home.js'
import SignIn from 'view/user/SignIn.js'
import SignUp from 'view/user/SignUp.js'
import S from './style.scss'
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      // 保存用户信息
      myInfo: null
    };
  }
  render() {
    return (
      <div className={S.layout}>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/sign_in" component={SignIn} />
        <Route exact path="/sign_up" component={SignUp} />
      </div>
    );
  }
}

export default Layout;