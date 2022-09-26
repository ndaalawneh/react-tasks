export default function(state = { posts: [] }, action) {
  switch (action.type) {
    case "REQUEST":
      return { ...state, loading: true };
    case "SUCCESS":
      return { ...state, loading: false, posts: action.payload };
    case "FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
