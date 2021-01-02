import React from 'react'

import './footer.css'

export default function footer() {
    return (
        <footer>
            <div className="contact">
                <span>What's the real Ash's age? &#129300;</span>
                <div className="social-media">
                    <ul>
                        <li><i class="fab fa-facebook-square"></i></li>
                        <li><i class="fab fa-instagram"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-github"></i></li>
                        <li><i class="fab fa-youtube"></i></li>
                    </ul>
                </div>
            </div>
            
            <div className="credits">
                <div className="credits-images">
                    <ul>
                        <h3>Images</h3>
                        <li>Background Home:<a href="https://bulbapedia.bulbagarden.net/wiki/DP147">Bulbapedia</a></li>
                    </ul>
                </div>

                <div className="credits-api">  
                    <ul>
                        <h3>Resources</h3>
                        <li>API:<a href="https://pokeapi.co/">PokéAPI</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
