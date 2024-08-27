import React, {useEffect, useState} from 'react';
import classes from "./PokemonPage.module.scss";
import PokemonList from "../../components/pokemonList/PokemonList";

const PokemonPage = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true)
    console.log(pokemons, 'pokemons')

    useEffect(()=>{
        getPokemons()
            .then(data => setPokemons(data))
    },[])

    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

    const getPokemons = async (id) => {
        setLoading(true)
        try {
            const response = await fetch(`${BASE_URL}`)
            const data = await response.json()
            return data.results
        }
        catch (e) {
            console.log(e)
        }
        finally {
            setLoading(false)
        }
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                Pokemon
            </div>
            <PokemonList pokemons={pokemons}/>
        </div>
    )
};

export default PokemonPage;