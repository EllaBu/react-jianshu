import React , {Component} from 'react';
import Panel from './Panel';
import S from './style.scss';

import Validation from 'util/validation' 

export default class SignInPanel extends Component{

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      userErr: false,
      passErr: false
    }

    this.validator = new Validation();
    this.validator.addByValue('username', [
      {strategy: 'isEmpty', errorMsg: '用户名不能为空'},
      {strategy: 'hasSpace', errorMsg: '用户名不能有空格'},
      {strategy: 'maxLength:8', errorMsg: '用户名最长为8位字符'}
    ])

    this.validator.addByValue('password', [
      {strategy: 'isEmpty', errorMsg: '用户名不能为空'},
      {strategy: 'hasSpace', errorMsg: '用户名不能有空格'},
      {strategy: 'maxLength:8', errorMsg: '用户名最长为8位字符'}
    ])

    this.nameChange = this.nameChange.bind(this)
    this.passChange = this.passChange.bind(this)
  }

  nameChange (ev) {
    console.log(this.validator)
    let msg = this.validator.valiOneByValue('username', ev.target.value)
    console.log('username--' + ev.target.value)
    console.log('userErr--' + msg)
    this.setState({
      username: ev.target.value,
      userErr: msg
    })
  }

  passChange (ev) {
    let msg = this.validator.valiOneByValue('password', ev.target.value)
    this.setState({
      password: ev.target.value,
      passErr: msg
    })
    console.log('password--' + ev.target.value)
    console.log('passErr--' + msg)
  }


  render(){
    let {username, password, userErr, passErr} = this.state
    let {nameChange, passChange} = this
    let userErrMsg = userErr ? (<p className={S.err}>{userErr}</p>) : null
    let passErrMsg = passErr ? (<p className={S.err}>{passErr}</p>) : null
    return (
      <div className={S.sign_panel}>
        <form className="ui form">
          <div className={`field ${userErr ? 'error' : ''}`}>
            <input
                type="text"
                placeholder="用户名"
                ref="nameDom"
                value={username}
                onChange={nameChange}
            />
            {userErrMsg}
          </div>

          <div className={`field ${passErr ? 'error' : ''}`}>
            <input
                type="text"
                placeholder="密码"
                ref="passDom"
                value={password}
                onChange={passChange}
            />
            {passErrMsg}
          </div>

          <div className="field">
            <button type="submit"
                className="ui button fluid primary"
            >登录</button>
          </div>
        </form>
      </div>
    );
  }
}
