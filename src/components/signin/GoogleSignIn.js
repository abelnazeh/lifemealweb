import React from "react";
import { useGoogleLogin } from "react-google-login";
import { GmailIcon } from "../generic/imagesSVG";
import { refreshTokenInit } from "../services/SignIn";
function GoogleSignIn(props) {

  const LoginSuccess = (response) => {
    console.log('called');
    refreshTokenInit(response);
    props.callback(response.profileObj);
  };

  const LoginFailed = (response) => {
    console.log(" failed ", response);
    props.callback(response);
  };
  const { signIn } = useGoogleLogin({
    loginHint: "Google login",
    onSuccess:LoginSuccess,
    onFailure: LoginFailed,
    cookiePolicy:'single_host_origin',
    clientId: `${process.env.REACT_APP_GOOGLE_ID}`,
    isSignedIn: true,
    accessType: "offline",
  });
  return (
    <div onClick={signIn} className="social-icon-login">
      <GmailIcon title="google icon"></GmailIcon>
    </div>
  );
}

export default GoogleSignIn;
