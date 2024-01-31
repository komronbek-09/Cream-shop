import React from 'react'
import '../Style/gloss.css'
import gloss from '../image/gloss.png'
import card1 from '../image/card1.png'
import card2 from '../image/card2.png'
import card3 from '../image/card3.png'
import card4 from '../image/card4.png'
import card5 from '../image/card5.png'
import card6 from '../image/card6.png'
function Gloss() {
    return (
        <section className='gloss'>
            <div className="container">
                <div className="gloss_wrapper">
                    <div className="glos_content">
                        <h2>Ingredients</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        <div className="gloss_grid">
                            <div className="gloss_card">
                            <img className='card' src={card1} alt="" />
                            <h4>Hydrating Nectar</h4>
                            </div>
                            <div className="gloss_card">
                            <img className='card' src={card2} alt="" />
                            <h4>Aloe steam cells</h4>
                            </div>
                            <div className="gloss_card">
                            <img className='card' src={card3} alt="" />
                            <h4>Seamoss</h4>
                            </div>
                            <div className="gloss_card">
                            <img className='card' src={card4} alt="" />
                            <h4>Niacinamide</h4>
                            </div>
                            <div className="gloss_card">
                            <img className='card' src={card5} alt="" />
                            <h4>Almond oil</h4>
                            </div>
                            <div className="gloss_card">
                            <img className='card' src={card6} alt="" />
                            <h4>Grapeseed oil</h4>
                            </div>
                        </div>
                        <h5>Full Ingredient glossary </h5>
                        <span className='gloss_span'></span>
                    </div>
                    <img className='gloss_img' src={gloss} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Gloss