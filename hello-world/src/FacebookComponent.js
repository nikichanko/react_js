import React from 'react';

const DEFAULTS_FB_PROPS = {
    scope: "public_profile,email",
    language: "en_US",
    version: "v2.5",
    class: "facebook-login",
    buttonText: "Login With Facebook",
    xfbml: true,
    responseHandler: () => {},
    socialId: 'your_fb_api_id'
};

function extend() {
      for(var i=1; i<arguments.length; i++)
          for(var key in arguments[i])
              if(arguments[i].hasOwnProperty(key))
                  arguments[0][key] = arguments[i][key];
      return arguments[0];
}

export default class FacebookLogin extends React.Component {
  constructor(props) {
        super();
        this.ext_props = extend(DEFAULTS_FB_PROPS, props.options);
        this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
        const self = this;
        window.fbAsyncInit = () => {
          window.FB.init({
              appId: self.ext_props.socialId,
              xfbml: self.ext_props.xfbml,
              cookie: self.ext_props.cookie,
              version: self.ext_props.version,
          });
        };
        (function (d, s, id) {
        const element = d.getElementsByTagName(s)[0];
        const fjs = element;
        let js = element;
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = '//connect.facebook.net/'+self.ext_props.language+'/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
  }

  responseApi (authResponse) {
    window.FB.api(`/me?fields=${this.ext_props.fields}`, (me) => {
      me.accessToken = authResponse.accessToken;
      this.ext_props.responseHandler(me);
    });
  };

  checkLoginState (response) {
    if (response.authResponse) {
      this.responseApi(response.authResponse);
    } else {
      if (this.ext_props.responseHandler) {
        this.ext_props.responseHandler({ status: response.status });
      }
    }
  };

  clickHandler () {
    window.FB.login(this.checkLoginState.bind(this), { scope: this.ext_props.scope });
  };

  render() {
    return (
      <div>
        <button className={this.ext_props.class} onClick={this.clickHandler}>
          {this.ext_props.buttonText}
        </button>
      </div>
    );
  }
}