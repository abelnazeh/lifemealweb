import React, { Component } from "react";

export default class FacebookLogin extends Component {
  
  componentDidMount() {
    document.addEventListener("FBObjectReady", this.initializeFacebookLogin);
  }

  componentWillUnmount() {
    document.removeEventListener("FBObjectReady", this.initializeFacebookLogin);
  }

  
  //  * Init FB object and check Facebook Login status
   
  initializeFacebookLogin = () => {
    this.FB = window.FB;
    this.checkLoginStatus();
  };

  
  // check user status
  checkLoginStatus = () => {
    this.FB.getLoginStatus(this.facebookLoginHandler);
  };

  // logout the user from the app via facebook
 logout=()=>{
  this.FB.logout(function(response) {
    // user is now logged out
    console.log('user logout',response)
  });
 }
    //  * Check login status and call login api is user is not logged in
   
  facebookLogin = () => {
    if (!this.FB) return;

    this.FB.getLoginStatus((response) => {
      if (response.status === "connected") {
        this.facebookLoginHandler(response);
      } else {
        this.FB.login(this.facebookLoginHandler, {
          // last_name,first_name
          scope: "public_profile",
        });
      }
    });
  };

  
  //  * Handle login response
   
  facebookLoginHandler = (response) => {
    if (response.authResponse || response.status === "connected") {
    //  fetching the user profile details for the specified fields below
      this.FB.api(
        "/me",
        "GET",
        { fields: "id,name,last_name,email,first_name,birthday,gender,picture{url,is_silhouette,height,width}" },
        // birthday,gender,picture{url,is_silhouette,height,width}
        (userData) => {
          let result = {
            ...response,
            user: userData,
          };
          // sending call back to the parent component
          this.props.onLogin(true, result);
        }
      );
    } else {
      console.log("User cancelled login or did not fully authorize.");
      this.props.onLogin(false);
    }
  };

  render() {
    let { children } = this.props;
    return <div onClick={this.facebookLogin}>{children}</div>;
  }
}
