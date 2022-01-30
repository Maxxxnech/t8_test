//**Api для получения сообщений с сервера*********** */ 
// Используется free online REST API jsonplaceholder
// Возвращает промис с json
const getApiPostsPromise = fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((data) => data.json());
  
  export default getApiPostsPromise;