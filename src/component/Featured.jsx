import React from 'react'
import '../Style/featured.css'
import vogue from '../image/vogue.svg'
import elle from '../image/elle.svg'
import allure from '../image/allure.svg'
import healthy from '../image/health.svg'
function Featured() {
    return (
        <div className='featured'>
            <div className="container">
                <h4>Featured</h4>
                <div className="featured_wrapper">
                <img src={vogue} alt="" />
                <img src={elle} alt="" />
                <img src={allure} alt="" />
                <img src={healthy} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Featured