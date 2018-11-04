const defaultState={
    city:'', 
    restaurants:[],
    likes: [],//likes will store list of res_id restaurant ids
    error: ''
};

export const restaurantReducer = (state = defaultState, action) =>{
    switch(action.type){
        case 'RESET_STATE':
            return defaultState;

        case 'SET_CITY':
            return {
                ...state,
                city: action.city
            }
        case 'FETCH_RESTAURANTS':
            return {
                ...state,
                restaurants:  [...state.restaurants , action.restaurant ]
            }

        case 'SET_LIKE':
            let likesArr=[];
            if(!action.like){//not present --at the time of page load
                likesArr= JSON.parse(localStorage.getItem('likes'));
            }
            else{
                if(state.likes){
                    likesArr=[...state.likes, action.like];
                }
                else{
                    likesArr=[ action.like];
                }
                localStorage.setItem('likes', JSON.stringify(likesArr));
            }
            return {
                ...state,
                likes: likesArr
            }
            
        
        case 'UNSET_LIKE':
            const likesUpdated = state.likes.filter((like) =>{
                                    return like!==action.like;
                                });

            localStorage.setItem('likes',JSON.stringify(likesUpdated))

            return {
                ...state,
                likes: likesUpdated
            }

        case 'SET_ERROR':
            return {
                ...state,
                error: action.error
            }

        default:
            return state;
    }
}