import React from 'react';
import Pokemon from "../pokemon/Pokemon";
import classes from "./PokemonList.module.scss";

const PokemonList = ({pokemons}) => {
    return (
        <ul className={classes.list}>
            {
                pokemons.map(pokemon => <Pokemon pokemon={pokemon}/>)
            }
        </ul>
    );
};

export default PokemonList;