import {FETCH_CRYPTO,FETCH_ALLCRYPTO,FETCH_FORUM} from './types';
// import {api} from '../assets/credentials';

export const fetchTopTenCrypto= () => (dispatch) => {
  console.log("fetch topten")
  fetch("https://min-api.cryptocompare.com/data/top/totaltoptiervol?extraParams=https:%2F%2Fwww.cryptocompare.com&limit=10&page=0&tsym=USD&key=be0c6c7da1dfcc09d10b8818d43457b3d83b8cdf8c85d482072715a0e7043bd9")
      .then(res=>res.json())
      .then(crypto=>dispatch({
         type: FETCH_CRYPTO,
         payload: crypto.Data,
    })) 
};
export const fetchAllCrypto= () => (dispatch) => {
  console.log("fetchAll")
  fetch("https://min-api.cryptocompare.com/data/top/totaltoptiervol?extraParams=https:%2F%2Fwww.cryptocompare.com&limit=100&page=0&tsym=USD&key=be0c6c7da1dfcc09d10b8818d43457b3d83b8cdf8c85d482072715a0e7043bd9")
      .then(res=>res.json())
      .then(crypto=>dispatch({
         type: FETCH_ALLCRYPTO,
         payload: crypto.Data,
    })) 
};
export const fetchForum=()=>(dispatch)=>{
  console.log("fetch forum")
  fetch("https://www.cryptocompare.com/api/forum/get/trending/?&key=be0c6c7da1dfcc09d10b8818d43457b3d83b8cdf8c85d482072715a0e7043bd9")
  .then(res=>res.json())
  .then(data=>{
    console.log(data,"action")
    // return dispatch({
    //   type:FETCH_FORUM,
    //   payload:data.PostArray
    // })
  }
  )
  .catch(err=>console.log(err))
}
export const fetchNews=()=>(dispatch)=>{
  fetch("https://min-api.cryptocompare.com/data/v2/news/?&excludeCategories=Sponsored&extraParams=https:%2F%2Fwww.cryptocompare.com&key=be0c6c7da1dfcc09d10b8818d43457b3d83b8cdf8c85d482072715a0e7043bd9")
      .then(res=>res.json())
      .then(news=>dispatch({
        type:FETCH_FORUM,
        payload:news.Data
      })
      ) 
}
