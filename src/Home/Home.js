import React from 'react'

import './home.css'

import { background } from '../images/background.png'

export default function Home() {
    return (
        <div className="home">
            <div className="background">
                <div className="background-image">
                    <div className="background-content">
                        <h1>We always would like to know about our favorites pokemons. Now we can do it! In this Pokedex you can see details around 650 differents pokemons! So, what are you waiting?</h1>
                        <div className="subcontent">
                            <ul>
                                <li><i class="fas fa-mobile-alt"></i>Verify in mobile version</li>
                                <li><i class="fas fa-list-alt"></i>Check all pokemons in only one list</li>
                                <li><i class="fas fa-sim-card"></i>Look the cards!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
