const api = 'https://teamdenver-backend.herokuapp.com';
export const api_websocket='1b1c18cf8627fe665b46c359056aff337563e7213c518a5e75edaa6fa57b998a';


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

// export const  fetchNews= async()=>{
//   const result=await
//   fetch("https://min-api.cryptocompare.com/data/v2/news/?&excludeCategories=Sponsored&extraParams=https:%2F%2Fwww.cryptocompare.com&key=be0c6c7da1dfcc09d10b8818d43457b3d83b8cdf8c85d482072715a0e7043bd9")
//       .then(res=>res.json())
//       .then(news=>{
//         // console.log(news.Data)
//           return news.Data}
//       ) 
//     return result
// }
export const fetchForum=()=>{
  console.log("fetch forum")
  fetch("https://www.cryptocompare.com/api/forum/get/trending/?&key=be0c6c7da1dfcc09d10b8818d43457b3d83b8cdf8c85d482072715a0e7043bd9")
  .then(res=>res.json())
  .then(data=>{
    console.log(data,"action")
  }
  )
  .catch(err=>console.log(err))
}
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
