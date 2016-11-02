import React from 'react';


class FacebookLogin extends React.Component {
  constructor(props) {
    super(props);
    this.checkLoginState = this.checkLoginState.bind(this);
  }


componentWillMount(){
            (function (d, s, id) {
        const element = d.getElementsByTagName(s)[0];
        const fjs = element;
        let js = element;
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = '//connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
}
  componentDidMount() {
      console.log(window.FB);
     //const FB = FB || {};
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: this.props.socialId,
        xfbml: this.props.xfbml,
        cookie: this.props.cookie,
        version: this.props.version,
      });
    };
  }

  responseApi (authResponse) {
     // const FB = FB || {};
    window.FB.api(`/me?fields=${this.props.fields}`, (me) => {
      me.accessToken = authResponse.accessToken;
      this.props.responseHandler(me);
    });
  };

  checkLoginState (response) {
    if (response.authResponse) {
      this.responseApi(response.authResponse);
    } else {
      if (this.props.responseHandler) {
        this.props.responseHandler({ status: response.status });
      }
    }
  };

  clickHandler () {
    //  const FB = FB || {};
    window.FB.login(this.checkLoginState, { scope: this.props.scope });
  };

  render() {
    return (
      <div>
        <button className={this.props.class} onClick={this.clickHandler.bind(this)}>
          {this.props.buttonText}
        </button>
      </div>
    );
  }
}

class FBLogin extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  responseFacebook (response) {
    console.log(response);
    //anything else you want to do(save to localStorage)...
  }

  render () {
    return (
      <div>
        <FacebookLogin socialId="582584571930800"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       version="v2.5"
                       class="facebook-login"
                       buttonText="Login With Facebook"/>
      </div>
    );
  }

}

export default FBLogin;