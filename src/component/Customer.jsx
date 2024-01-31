import React from 'react'
import '../Style/customer.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import customer1 from '../image/customer1.png'
import customer2 from '../image/customer2.png'
import customer3 from '../image/customer3.png'
import customer_icons from '../image/collection_icons.svg'

function Customer() {
    return (
        <section className='customer'>
            <div className="container">
          <div className="customer_wrapper">
          <div className="customer_text">
                    <h4>The results</h4>
                    <h2>From our customers</h2>
                    <img src={customer_icons} alt="" />
                </div>
                <div className="customer_swiper">
                <Swiper
                        slidesPerView={3} 
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                     
                        modules={[Pagination]}
                        className="appSwiper2"
                    >
                        <SwiperSlide>
                            <img className='customer1' src={customer1} alt="img" />
                            
                        </SwiperSlide>
            
                        <SwiperSlide>
                            <img className='customer1' src={customer2} alt="img" />
                            
                        </SwiperSlide>
            
                        <SwiperSlide>
                            <img className='customer1'  src={customer3} alt="img" />
                            
                        </SwiperSlide>
            
                        <SwiperSlide>
                            <img className='customer1'  src={customer3} alt="img" />
                            
                        </SwiperSlide>
            
                        

                        
                    </Swiper>
                </div>
          </div>
            </div>
        </section>
    )
}

export default Customer