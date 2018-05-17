const initialState = {
    username:'',
    message:''
}


const userdata=(state=initialState , action)=>{


switch (action.type) {

    case 'LOGOUT':
        state = {
            message:action.payload.message
        }
        break;

    case 'MESSAGE':
        state = {
            ...state,
            message : action.payload.message
        }
        break;

    default :
        state = {
            ...state
        }
        break;
}

return state ;

}

export default userdata;