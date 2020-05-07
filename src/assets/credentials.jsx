let token = '';
let key = '';
const api = '';

export const useDetail = (userid) => {
  const result = fetch(``)
    .then((data) => data.json())
    .then((data) => data);
  return result;
};
