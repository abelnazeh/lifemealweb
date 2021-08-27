import React from "react";
import { useGoogleLogout } from "react-google-login";

const GoogleSignOut = (props) => {
  const LogOutSuccess = (response) => {
    let info = {...response, isLoggout: loaded}
    props.callback(info);
  };

 const LogOutFailed = (response) => {
console.log('logout error', response);
  };

  const { signOut, loaded } = useGoogleLogout({
    clientId: process.env.REACT_APP_GOOGLE_ID,
    onLogoutSuccess: LogOutSuccess,
    loginHint: "Google logout",
    onFailure: LogOutFailed,
    cookiePolicy:'single_host_origin'
  });

  return (
    <div onClick={signOut} className="social-icon-login">
      Google Logout
      {/* <GoogleLogout
          clientId={process.env.REACT_APP_GOOGLE_ID}
          buttonText="Logout"
          onLogoutSuccess={this.LogOutSuccess}
          onFailure={this.LogOutFailed}
        ></GoogleLogout> */}
      {/* <GoogleLogout
          onLogoutSuccess={this.LogOutSuccess}
          onFailure={this.LogOutFailed}
          buttonText='sign out gmail'
        /> */}
    </div>
  );
};

export default GoogleSignOut;
