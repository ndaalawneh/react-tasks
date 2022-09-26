import { RSAA } from "redux-api-middleware";

export const fetchPosts = () => ({
  [RSAA]: {
    endpoint: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
    types: ["REQUEST", "SUCCESS", "FAILURE"]
  }
});
