const api = 'https://teamdenver-backend.herokuapp.com';
export const api_websocket='5a640b5b357ce0a3d202c548571941fad670dd34b3014bcdff08c29c7ce6f7b6';


export const registrationUser = (data) => {
  const result = fetch(`${api}/api/users`,{
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })

    .then((data) => data.json())
    .then((data) => data);
  return result;
};


export const loginUser = (data) => {
  const result = fetch(`${api}/api/auth`,{
    method: 'POST',
    body: JSON.stringify(data),
    headers: {      
      "Content-type": "application/json; charset=UTF-8"
    }
  })

    .then((data) => data.json())
    .then((data) => data);
  return result;
};

export const addCoin = (data,token) => {
  const result = fetch(`${api}/api/coins`,{
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "x-auth-token": `${token}`,     
      "Content-type": "application/json; charset=UTF-8",

    }
  })

    .then((data) => data.json())
    .then((data) => data);
  return result;
};

export const deleteCoin = (id,token) => {
  const result = fetch(`${api}/api/coins`,{
    method: 'DELETE',
    body: JSON.stringify(id),
    headers: {
      "x-auth-token": `${token}`, 
      "Content-type": "application/json; charset=UTF-8",  

    }
  })

    .then((data) => data.json())
    .then((data) => data);
  return result;
};