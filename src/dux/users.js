import axios from 'axios';

const init_state = { user:{} };



const GET_USER = 'GET_USER';


export function getUser (action) {
    let userData = axios.get('/auth/me').then( res => {
        return res.data;
    })
    return {
        type: GET_USER,
        payload: userData
    }
}


// state = init_state is not an assignment, it is a default parameter
export default function reducer (state = init_state, action) {
    switch (action.type) {

        case GET_USER + `_FULFILLED`:
            return Object.assign({}, state, {user: action.payload})


        default: return state;
    }
}