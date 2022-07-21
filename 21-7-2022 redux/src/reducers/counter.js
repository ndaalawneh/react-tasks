
const reducer = (state = 0, action) => {
    switch (action.type) {
       case 'INCREMENT': { return state + action.sallery}
       case 'DECREMENT': { return state - action.sallery}
      
       default: return state ;
    }
  }

  export default reducer;