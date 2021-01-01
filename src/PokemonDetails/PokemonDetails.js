import React, { useEffect, useState } from 'react'

import './details.css'

export default function PokemonDetails({match}) {

    const [details, setDetails] = useState({});
    const [images, setImages] = useState({});
    const [stats, setStats] = useState([]);
    const [moves, setMoves] = useState([]);
    const [abilities, setAbilities] = useState([]);
    const [types, setTypes] = useState([]);

    var idPoke = match.params.id;

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPoke}`).then(res => res.json()).catch(err => console.log(err));
            console.log(data);
            setDetails(data);
            setStats(data.stats);
            setMoves(data.moves);
            setAbilities(data.abilities);
            setTypes(data.types);
            setImages(data.sprites.other.dream_world.front_default);
        }
        fetchData();
    },[]);

    return (
        <div className="details">
            <div className="details-card">
                <div className="image">
                    <img src={images}/>
                </div>
                <h1>{details.name}</h1>
                <div className="details-info">
                    <div className="abilities info">
                        <h2>Abilities</h2>
                        <ul>
                            {abilities.map(ability => (
                                <li>
                                    <h3>{ability.ability.name}</h3>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="types info">
                        <h2>Types</h2>
                        <ul>
                            {types.map(type => (
                                <li key={type.slot}>
                                    <h3>{type.type.name}</h3>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="aditional info">
                        <h2>Weight</h2>
                        <h3>{details.weight}</h3>
                    </div>

                    <div className="aditional info">
                        <h2>Height</h2>
                        <h3>{details.height}</h3>
                    </div>

                    <div className="aditional info">
                        <h2>Base Experience</h2>
                        <ul>
                            <li>
                                <h3>{details.base_experience}</h3>
                            </li>
                        </ul>
                    </div>

                    <div className="aditional info">
                        <h2>Order</h2>
                        <ul>
                            <li>
                                <h3>00{details.order}</h3>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="aditional-stats info stats">
                    <h2>Stats</h2>
                    <ul>
                        {stats.map(stat => (
                            <li>
                                <h3>{stat.stat.name}</h3> 
                                <h4>{stat.base_stat}</h4>
                            </li> 
                        ))}
                    </ul>
                </div>

                <div className="aditional-stats info moves">
                    <h2>Moves</h2>
                    <ul>
                        {moves.map(move => (
                            <li>
                                <h3>{move.move.name}</h3> 
                            </li> 
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
