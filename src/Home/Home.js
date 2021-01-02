import React from 'react'

import './home.css'

import Footer from '../Footer/Footer'

export default function Home() {
    return (
        <div className="home">
            <div className="background">
                <div className="background-image">
                    <div className="background-content">
                        <h1>We always would like to know about our favorites pokemons. Now we can do that! In this Pokedex you can see details of about 650 different pokemons! So, what are you waiting for?</h1>
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

            <div className="content">
                <div className="info-cards">
                    <div className="card">
                        <div className="head">
                            <i class="far fa-images"></i>
                            <h2>Images</h2>
                        </div>
                        <p>Each card in the list has a image showing the selected pokemon. That way the identification is easier for those unknown pokemons!</p>
                    </div>

                    <div className="card">
                        <div className="head">
                            <i class="far fa-plus-square"></i>
                            <h2>Stats</h2>
                        </div>
                        <p>Have you ever wondered what the status of a pokemon is? Now you can see some information about it to improve your pokemon master skills</p>
                    </div>

                    <div className="card">
                        <div className="head">
                            <i class="fas fa-shield-alt"></i>
                            <h2>Abilities</h2>
                        </div>
                        <p>Can not remember how many abilities a specific pokemon has? Or have you forget any of then? The cards will help you e prepare yourself to battle!</p>
                    </div>
                </div>
                <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7a1818" fill-opacity="0.7" d="M0,256L48,229.3C96,203,192,149,288,144C384,139,480,181,576,165.3C672,149,768,75,864,85.3C960,96,1056,192,1152,224C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>

            <Footer/>
        </div>
    )
}
