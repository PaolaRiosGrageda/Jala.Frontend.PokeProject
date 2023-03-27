export default function favoritePokeReducer(state = [], action){
    switch (action.type) {
        case "CREATE_FAVORITE":
            //Delete if the same id is already present
            let deleted = false;

            for (let i = 0; i < state.length; i++) {
                if(state[i].pokemonId === action.favorite.pokemonId){
                    debugger;
                    deleted = true;
                    break;
                }
            }

            if(deleted) {
              var newState = [];
              state.forEach(x => {
                if(x.pokemonId !== action.favorite.pokemonId){
                    newState.push(x);
                }
              });
              return [...newState];
            } else {
                return [...state,{ ...action.favorite}];
            }

        default:
            return state;
    }
}