import React, { useState } from 'react'
import '../Style/universal.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// import swiper1 from '../image/swiper.png'
// import swiper2 from '../image/swiper2.png'
import swiper3 from '../image/swiper3-removebg-preview.png'
import swiper4 from '../image/collection_img1.png'
import swiper5 from '../image/collection_img2.png'
import swiper6 from '../image/collection_img3.png'
import affrim from '../image/affrim.svg'
function Universal() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='universal'>
            <div className="container">
                    <div className="universal_text1">
                        <p>Home/Best Seller/ <span>Universal Mineral Face Lotion SPF55</span></p>
                    </div>
                <div className="universal_wrapper">

                    <div className="universal_swiper">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={5}
                            freeMode={true}
                            direction='vertical'
                            watchSlidesProgress={true}
                            breakpoints={{
                                640: {
                                  slidesPerView: 2,
                                  spaceBetween: 20,
                                },
                                768: {
                                  slidesPerView: 4,
                                  spaceBetween: 40,
                                },
                                1024: {
                                  slidesPerView: 5,
                                  spaceBetween: 50,
                                },
                              }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={swiper3} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiper3} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>

                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiper4} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiper5} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiper6} alt="" />
                            </SwiperSlide>

                        </Swiper>
                        <Swiper
                            spaceBetween={10}
                            thumbs={{
                                swiper:
                                    thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                            }}
                            modules={[FreeMode, Thumbs]}
                            className="mySwiper2">
                            <SwiperSlide>
                                <img src={swiper3} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiper3} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>

                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiper4} alt="" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src={swiper5} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiper3} alt="" />
                            </SwiperSlide>


                        </Swiper>

                    </div>
                    <div className="universal_text2">
                        <h2>Niche Beauty CCC Cream – Niche Beauty</h2>
                        <h5>$28.00</h5>
                        <p>The original, weightless, scentless sunscreen with SPF 55 that leaves a shinny finish.  <span>Formulated with the most sensitive and vulnerable in mind, with a custom blend of natural, gentle and hydrating island ingredients mixed with the most effective skincare-grade actives.</span></p>
                        <h5>Size <span>50 ml</span></h5>
                        <div className="button">
                        <button className='radio'>1.7 fl oz</button>
                        <button className='radio1'>2.5 fl oz</button>
                        <button className='radio2'>3.4 fl oz</button>
                        </div>
                        <h6><input type="radio" name='input'  id="radio" checked/>    $28.00 One time purchase</h6>
                        <h6><input type="radio" name='input'  id="radio"  />    $28.00 One time purchase</h6>
                        <div className="add">
                        <h6 className='add1'>- 1 <span>+</span></h6>
                        <button className='add2'>Add to cart - $28.00</button>
                        </div>
                         <div className="universal_starting">
                         <h5>Starting at $20/mo with </h5>
                         <img src={affrim} alt="" />
                         <p>Learn more</p>
                         </div>
                        <div className="universal_list">
                        <ul>
                            <hr />
                            <li>Use Instruction <span>+</span></li>
                            <hr />
                            <li>Ingredients <span>+</span></li>
                            <hr />
                            <li>Shipping and Returns <span>+</span></li>
                            <hr />
                            <li>Shipping and Returns <span>+</span></li>
                            <hr />
                         </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Universal