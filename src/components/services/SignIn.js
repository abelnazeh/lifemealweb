import { PostRequest } from "../services/Requests";
import { createStorageItem } from "./util";
export const refreshTokenInit = async(params) => {

    const reloadAccessToken = await params.reloadAuthResponse();
 
    PostRequest("/google/user/oauth/verify_token", { token: reloadAccessToken.id_token }).then((response) => {
      let {token} = response;
      createStorageItem('Token',token)
    });

};
