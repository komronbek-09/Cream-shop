import React from 'react'
import '../Style/collection.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import collection_img1 from '../image/collection_img1.png'
import collection_img2 from '../image/collection_img2.png'
import collection_img3 from '../image/collection_img3.png'
import collection_icons from '../image/collection_icons.svg'
function Collection() {
    return (
        <section className='collection'>
            <div className="container">
                <div className="collection_wrapper">

                <div className="collection_text">
                    <h2>Collections</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum, Cream Shop</p>
               </div>
                    
               <div className="icons">
             <img src={collection_icons} alt="" />
                </div>
                </div>
                <div className="collection_swiper">
                <Swiper
                        slidesPerView={2.2}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                       
                        modules={[Pagination]}
                        className="appSwiper"
                    >
                        <SwiperSlide>
                            <img className='img1' src={collection_img1} alt="img" />
                            
                           <h4>Sed ut perspiciatis</h4>
                        </SwiperSlide>
            
                        <SwiperSlide>
                            <img className='img1' src={collection_img2} alt="img" />
                            
                           <h4>Lorem ipsum dolor</h4>
                        </SwiperSlide>
            
                        <SwiperSlide>
                            <img className='img1' src={collection_img3} alt="img" />
                            
                           <h4>At vero eos</h4>
                        </SwiperSlide>
            
                        

                        
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Collection