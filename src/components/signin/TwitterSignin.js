import React from "react";
import { TwitterIcon } from "../generic/imagesSVG";
// import { refreshTokenInit } from "../services/SignIn";
// import TwitterLogin from "react-twitter-auth";
import { useState, useEffect } from "react";
import queryString from "query-string";
import { PostRequest,GetRequest } from "../services/Requests";
import axios from "axios";

function TwitterSignIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [status, setStatus] = useState();
  const [url, setUrl] = useState();

  const signIn = () => {
    (async () => {
      try {
        //OAuth Step 1
        console.log(process.env.REACT_APP_API_URL);
        await PostRequest(
        `/twitter/user/oauth/request_token`
        }).then((result) => {
          console.log("firzt response ", result.data);
          const { oauth_token } = result.data;
          //Oauth Step 2
          window.location.href = `https://api.twitter.com/oauth/authenticate?oauth_token=${oauth_token}`;
        });
      } catch (error) {
        console.error(error);
      }
    })();
  };

  const logout = () => {
    (async () => {
      try {
        await PostRequest(`/twitter/user/logout`).then((response) => response.json());
        setIsLoggedIn(false);
      } catch (error) {
        console.error(error);
      }
    })();
  };

  useEffect(() => {
    
    (async () => {
      const { oauth_token, oauth_verifier } = queryString.parse(
        window.location.search
      );
      const params = { oauth_token, oauth_verifier };

      console.log({ oauth_token, oauth_verifier }, params);
      if (oauth_token && oauth_verifier) {
        try {
          //Oauth Step 3
          await PostRequest
            `/twitter/user/oauth/access_token`
          }).then((response) => {
            console.log("access token obtained::::: ", response);
          });
        } catch (error) {
          console.error(error);
        }
      }

      try {
        //Authenticated Resource Access
        const {
          data: { name, profile_image_url_https, status, entities },
        } = await GetRequest( 
          `/twitter/user/profile_banner`
        ).then((response) => response.json());
        console.log("data:::::", name);
        setIsLoggedIn(true);
        setName(name);
        setImageUrl(profile_image_url_https);
        setStatus(status.text);
        setUrl(entities.url.urls[0].expanded_url);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="social-icon-login" onClick={signIn}>
      <TwitterIcon />
    </div>
  );
  //   }
}

export default TwitterSignIn;
