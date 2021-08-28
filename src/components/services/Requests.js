const { getStorageItem } = require("./util");

const token = getStorageItem("Token");
export const PostRequest = async (
  url,
  params = {},
  secure = true,
  ...others
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Bearer: secure ? token : "",
      },
      mode: "cors",
      body: JSON.stringify(params),
    }).catch((error) => {
      console.error("Error:", error);
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const GetRequest = async (url, secure = true) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Bearer: secure ? token : "",
      },
    }).catch((error) => {
      console.error("Error:", error);
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};
