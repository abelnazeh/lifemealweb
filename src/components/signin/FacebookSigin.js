import React from "react";
import FacebookLogin from "./Facebook";
import { FacebookIcon } from "../generic/imagesSVG";


function FacebookSignIn(props) {

  const onFacebookLogin = (loginStatus, resultObject) => {
  console.log(loginStatus, resultObject);
    if (loginStatus === true) {
        // Send response to the parent component
        props.callback(resultObject);
    } else {
        console.log(loginStatus,resultObject);
      console.log('Facebook login error');
    }
  }

  return (
    <div className="social-icon-login">
      <FacebookLogin onLogin={onFacebookLogin}>
      <FacebookIcon title="facebook icon"/>
      </FacebookLogin>
   
    </div>
  );
}

export default FacebookSignIn;
