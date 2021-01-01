import React, {useEffect, useState} from 'react'

import './list.css';

import {Link} from 'react-router-dom';

export default function List() {

    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=649`).then(res => res.json());
            console.log(res);
            setPokemonList(res.results);
        }
        fetchData();
        
    }, [])

    console.log(pokemonList)

    // console.log(pokemonList[2].url.substring(34,36))

    const style = {
        color: "#f2f2f2",
        textDecoration: "none",
    }

    return (
        <div className="pokemonList">
            {pokemonList.map(pokemon => (
                <div key={pokemon.url} className="pokemonInfo">
                    <h1>{pokemon.name}</h1>
                    <div className="links">
                        <Link style={style} to={`/details/${pokemon.url.substring(34,38)}`}>
                           Acesse a pokedex
                        </Link> 
                    </div>
                </div>
            ))}
        </div>
    )
}
