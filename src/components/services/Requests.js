const { getStorageItem } = require("./util");

const token = getStorageItem('Token');
exports.PostRequest = async (url, params={}, secure=true, ...others) => {

  const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
      'Bearer':secure? token :''
    },
  mode: 'cors',
    body: JSON.stringify(params),
  }).catch((error) => {
    console.error('Error:', error);
  });

  return response.json();
};

exports.GetRequest = async (url, secure=true) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        'Bearer':secure? token :''
      }
    }).catch((error) => {
      console.error('Error:', error);
    });
  
    return response.json();
  };