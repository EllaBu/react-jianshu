import React , {Component} from 'react';
import Panel from './Panel';
import S from './style.scss';

export default class SignUpPanel extends Component{

    constructor(props){
        super(props);

    }

    render(){

        return (
            <div className={S.sign_panel}>
                <form
                    className="ui form"
                >
                    <div className={`field`}>
                        <input
                            type="text"
                            placeholder="用户名"
                            ref="nameDom"
                        />
                    </div>
                    <div className={`field`}>
                        <input
                            type="text"
                            placeholder="密码"
                            ref="passwDom"
                        />
                    </div>
                    <div className={`field`}>
                        <input
                            type="text"
                            placeholder="确认密码"
                            ref="cfPasswDom"
                        />
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
