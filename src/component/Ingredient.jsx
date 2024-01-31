import React from 'react'
import '../Style/ingredient.css'
import ingredient1 from '../image/ingidretion1.png'
import ingredient2 from '../image/ingredetion2.png'
function Ingredient() {
    return (
        <section className='ingredient'>
            <div className="container">
                <div className="ingredient_wrapper">
                    <div className="ingredient_text">
                        <h2>Neque porro quisquam est, qui dolorem</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        <h5>Ingredient glossary</h5>
                        <span></span>
                    </div>
                    <img className='ingredetion1' src={ingredient1} alt="" />
                </div>
                <div className="ingredient_wrapper" >
                    <img className='ingredetion1' src={ingredient2} alt="" />
                    <div className="ingredient_text">
                        <h5>Our story</h5>
                        <h2>Ut enim ad minima</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        <h4>About Us</h4>
                        <span className='span'></span>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ingredient