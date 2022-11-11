import { setPokemons, startLoadingPokemons } from "./pokemonSlice"


export const getPokemons = (page = 0) => {
    return ( dispatch, getState ) => {
        dispatch(startLoadingPokemons() );

        //TODO: Realizar petición HTTP

        // dispatch(setPokemons); 
    }
}