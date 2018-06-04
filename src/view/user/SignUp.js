
import SignUpPanel from 'components/user/SignUpPanel';
import EntryPanel from 'components/user/Panel';

import api from 'config/config.json'

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          signUpMsg: null
        }
        this.signUpAjax = this.signUpAjax.bind(this)
    }

    signUpAjax(data) {
      $.post(`${api.url}/register`, data).done(res=>{
        console.log(res)
        this.setState({signUpMsg: res})
      })
    }

  //   signUpAjax(reqData){
  //     $.post(`${cfg.url}/register`, reqData)
  //     .done((ret)=>{
  //         let {code, data} = ret;

  //         this.setState({signUpMsg: ret});


  //     });
  // }

    render(){
      let {signUpAjax} = this
      let {signUpMsg} = this.state
        return (
            <EntryPanel >
                <SignUpPanel {...{signUpAjax, signUpMsg}} />
            </EntryPanel>
        );
    }
}
