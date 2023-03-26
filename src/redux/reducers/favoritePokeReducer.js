export default function favoritePokeReducer(state = [], action){
    switch (action.type) {
        case "CREATE_FAVORITE":
            return [...state,{ ...action.favorite}];
        default:
            return state;
    }
}