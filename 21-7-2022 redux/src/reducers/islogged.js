
const logged = (state = false, action) => {
switch(action.type){
    case 'singup': return true ;
    default : return state ;
}



};

export default logged;