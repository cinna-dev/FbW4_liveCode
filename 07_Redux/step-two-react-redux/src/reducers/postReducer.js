import {
    FETCH_POSTS,
    NEW_POST
} from '../actions/types'

/*
//the initialState is :
posts={
    items: [],
    item: {}
}
*/
const initialState = {
    items: [],
    item: {}
}
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload,

            };

        default:
            return state;
    }
}