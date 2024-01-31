import React from 'react'
import '../Style/collectionCarad.css'
import grid_img1 from '../image/swiper.png'
import grid_img2 from '../image/swiper2.png'
import grid_img3 from '../image/swiper3-removebg-preview.png'
import { NavLink } from 'react-router-dom'
import product_arrow from '../image/poduct_arrow.svg'
function CollectionCard() {
    return (
        <section className='collectionCard'>
            <div className="container">
                <div className="card_text">
                    <NavLink to="/">Home <span>/ Best Seller</span></NavLink>
                </div>
                <div className="sort_by">
                <p>Sort By</p>
                <img className='text2' src={product_arrow} alt="" />
                </div>
                <div className="collectionCard_wrapper">
                    <div className="collectionCard_grid">
                        <div className="swiper_bg">
                            <p className='radius'> NEW</p>
                        </div>
                        <img className='grid_img' src={grid_img1} alt="" />
                        <hr />
                        <p>+ Quick Shop</p>

                        <div className="grid_text">
                            <h5>Your Skin But Better CC+ Cream with SPF50 12ml </h5>
                            <h6>$28.00</h6>
                        </div>
                    </div>
                    <div className="collectionCard_grid">
                        <div className="swiper_bg1">
                            <p className='radius'> SALE</p>
                        </div>
                        <img className='grid_img' src={grid_img2} alt="" />
                        <hr />
                        <p>+ Quick Shop</p>
                        <div className="grid_text">
                            <h5>KEM DUONG VT CICA - VT CICA CREAM </h5>
                            <h6>$28.00<span>$32.00</span></h6>
                        </div>
                    </div>
                    <div className="collectionCard_grid">
                        <img className='grid_img' src={grid_img3} alt="" />
                        <hr />
                        <p>+ Quick Shop</p>
                        <div className="grid_text">
                            <h5>Niche Beauty CCC Cream – Niche Beauty </h5>
                            <h6>$28.00</h6>
                        </div>
                    </div>
                    <div className="collectionCard_grid">
                        <img className='grid_img' src={grid_img1} alt="" />
                        <hr />
                        <p>+ Quick Shop</p>
                        <div className="grid_text">
                            <h5>Your Skin But Better CC+ Cream with SPF50 12ml </h5>
                            <h6>$28.00</h6>
                        </div>
                    </div>

                    <div className="collectionCard_grid">
                        <img className='grid_img' src={grid_img1} alt="" />
                        <hr />
                        <p>+ Quick Shop</p>
                        <div className="grid_text">
                            <h5>Your Skin But Better CC+ Cream with SPF50 12ml </h5>
                            <h6>$28.00</h6>
                        </div>
                    </div>

                    <div className="collectionCard_grid">
                        <img className='grid_img' src={grid_img1} alt="" />
                        <hr />
                        <p>+ Quick Shop</p>
                        <div className="grid_text">
                            <h5>Your Skin But Better CC+ Cream with SPF50 12ml </h5>
                            <h6>$28.00</h6>
                        </div>
                    </div>
                </div>
                <p className='title'>Showing 16 of 23</p>
                <button className='btn'>load more</button>
            </div>
        </section>
    )
}

export default CollectionCard