import React , {Component} from 'react';
import Panel from './Panel';
import S from './style.scss';
import Validation from 'util/validation' 
export default class SignUpPanel extends Component{

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      rePassword: '',
      userErr: false,
      passErr: false,
      rePassErr: false
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
    this.rePasswordChange = this.rePasswordChange.bind(this)
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
    let {rePassErr} = this.state
    let msg = this.validator.valiOneByValue('password', ev.target.value)
    this.setState({
      password: ev.target.value,
      passErr: msg
    })
    if (rePassErr) {
      this.rePasswordChange()
    }
    console.log('password--' + ev.target.value)
    console.log('passErr--' + msg)
  }

  rePasswordChange () {
    let {passDom, rePassDom} = this.refs

    let rePassErr = passDom.value === rePassDom.value ? '' : '两次输入密码不一致！'
    this.setState({
      rePassword: rePassDom.value,
      rePassErr
    })
    console.log('rePassword--' + rePassDom.value)
    console.log('rePassErr--' + rePassErr)
  }

  render(){
    let {username, password, rePassword, userErr, passErr, rePassErr} = this.state
    let {nameChange, passChange, rePasswordChange} = this
    let userErrMsg = userErr ? (<p className={S.err}>{userErr}</p>) : null
    let passErrMsg = passErr ? (<p className={S.err}>{passErr}</p>) : null
    let rePassErrMsg = rePassErr ? (<p className={S.err}>{rePassErr}</p>) : null
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
          </div>
          <div className={`field ${rePassErr ? 'error' : ''}`}>
            <input
                type="text"
                placeholder="确认密码"
                ref="rePassDom"
                value={rePassword}
                onChange={rePasswordChange}
            />
            {rePassErrMsg}
          </div>
          <div className="field">
            <button type="submit"
                className="ui button fluid primary"
            >注册</button>
          </div>
        </form>
      </div>
    );
  }
}
