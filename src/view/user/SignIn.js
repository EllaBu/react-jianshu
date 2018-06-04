
import SignInPanel from 'components/user/SignInPanel';
import EntryPanel from 'components/user/Panel';
import api from 'config/config.json'


export default class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          myInfo: null,
          signInMsg: null
        }
        this.signInAjax = this.signInAjax.bind(this)
    }

    signInAjax(data){
      $.post(`${api.url}/login`, data)
        .done(res=>{
          console.log(res)
          let {code} = res
          if(code ===0){

          }else {
            this.setState({signInMsg: res})
          }
        })
    }

    render(){
        let {signInAjax} = this
        let {signInMsg} = this.state
        return (
            <EntryPanel >
                <SignInPanel {
                  ...{signInAjax, signInMsg}
                } />
            </EntryPanel>
        );
    }
}
