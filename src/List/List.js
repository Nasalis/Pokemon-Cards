import React, {useEffect, useState} from 'react'

import './list.css';

import {Link} from 'react-router-dom';

export default function List() {

    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {

        const fetchPokemon = () => {
            const getPokemon = id => `https://pokeapi.co/api/v2/pokemon/${id}`

            const pokemonInfo = []

            for(let i = 1; i < 650; i++) {
                pokemonInfo.push(fetch(getPokemon(i)).then(response => response.json()))
            } 

            Promise.all(pokemonInfo).then(pokemon => {
                setPokemonList(pokemon)
            })
        }

        fetchPokemon();
        
    }, [])

    console.log(pokemonList)


    const style = {
        color: "#f2f2f2",
        textDecoration: "none",
    }

    return (
        <div className="pokemonList">
            {pokemonList.map(pokemon => (
                <div key={pokemon.id} className="pokemonInfo">
                    <div className="pokemonInfo-show">
                        <h1>{pokemon.name}</h1>
                        <div className="pokemon-sprite">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
                        </div>
                    </div>
                    <div className="links">
                        <Link style={style} to={`/details/${pokemon.id}`}>
                           Acesse a pokedex
                        </Link> 
                    </div>
                </div>
            ))}
        </div>
    )
}
