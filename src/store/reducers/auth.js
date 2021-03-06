import * as actionTypes from '../actions/actionTypes' ;
import { UpdatedObj } from '../utility' ;
// import { socialLogin, socialAuth } from '../actions/auth';


//this will be initial state of the entire application 

//loading ,any errors


const initialState = {
    error : null ,
    loading : false ,
    token : null,
    username : null
}



//reducers return the updated state


const authStart = (state ,action) => {
    return UpdatedObj(state,{
        error : null,
        loading : true 
    })
}

const authSucces = (state,action) => {
    return UpdatedObj (state,{
        token: action.token,
        loading : false ,
        error : null ,
        username : action.username

    })
}

const authFail = (state,action) => {
    return UpdatedObj(state,{
        error : action.error,
        loading: false
    })
}


const authLogout = (state,action) => {
    
    return UpdatedObj(state,{
        token : null ,

    })
}



//now we will define where will this take place 


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START: return authStart(state,action)
        case actionTypes.AUTH_SUCCESS : return authSucces(state,action)
        case actionTypes.AUTH_FAIL: return authFail(state,action)
        case actionTypes.AUTH_LOGOUT : return authLogout(state,action)
        default  : return state
    }
}

export default reducer ;