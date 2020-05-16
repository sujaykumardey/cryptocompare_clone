let token = '';
let key = '';
const api = '';
export const news=""
export const useDetail = (userid) => {
  const result = fetch(``)
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
