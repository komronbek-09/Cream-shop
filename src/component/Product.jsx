import React from 'react'
import '../Style/product.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import swiper1 from "../image/swiper.png"
import swiper2 from "../image/swiper2.png"
import swiper3 from "../image/swiper3-removebg-preview.png"
import arrow from "../image/pdp_iconc.png"

function Product({text, title}) {
    return (
        <section className='product'>
            <div className="container">
                <div className="product_text">
                    <h2>{text}</h2>
                    <p>{title}</p>
                    <img className='arrow' src={arrow} alt="" />
                    <hr />
                </div>
                <div className="swiper">
                    <Swiper
                        slidesPerView={3.2}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="swiper_card">
                                <div className="swiper_bg">
                                    <p className='radius'> NEW</p>
                                </div>
                                <img className='product1' src={swiper1} alt="img" />
                                <hr />
                                <h5>+   Quick Shop</h5>
                            </div>
                            <div className="swiper_text">
                                <h6>Your Skin But Better CC+ Cream with SPF50 12ml </h6>
                                <p>$28.00</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper_card">
                                <div className="swiper_bg1">
                                    <p className='radius'> SALE</p>
                                </div>
                                <img className='product2' src={swiper2} alt="img" />
                                <hr />
                                <h5>+   Quick Shop</h5>
                            </div>
                            <div className="swiper_text">
                                <h6>KEM DUONG VT CICA - VT CICA CREAM </h6>
                                <p>$28.00 <span>$32.00</span></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper_card">

                                <img className='product3' src={swiper3} alt="img" />
                                <hr />
                                <h5>+   Quick Shop</h5>
                            </div>
                            <div className="swiper_text">
                                <h6>Niche Beauty CCC Cream – Niche Beauty </h6>
                                <p>$28.00</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper_card">

                                <img className='swiper4' src={swiper1} alt="img" />
                                <hr />
                                <h5>+   Quick Shop</h5>
                            </div>
                            <div className="swiper_text">
                                <h6>ISIE Glow body lotion SPF45 </h6>
                                <p>$28.00</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper_card">

                                <img className='product4' src={swiper1} alt="img" />
                                <hr />
                                <h5>+   Quick Shop</h5>
                            </div>
                            <div className="swiper_text">
                                <h6>Your Skin But Better CC+ Cream with SPF50 12ml </h6>
                                <p>$28.00</p>
                            </div>
                        </SwiperSlide>



                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Product