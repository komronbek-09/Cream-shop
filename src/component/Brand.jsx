import React from 'react'
import '../Style/brand.css'
import cream from '../image/cream (1) 1.png'
import make from '../image/make-up-kit 1.png'
import glass from '../image/gloss 1.png'
import cotton from '../image/cotton-swabs 1.png'
function Brand() {
    return (
        <section className='brand'>
            <div className="container">
                    <div className="brand_text">
                        <h5>Why brand name?</h5>
                        <h4 >Sed ut perspiciatis unde omy</h4>
                        <p>----------------------------------------------</p>
                        <h3>At vero eos et accusamus et iusto odio dignissimos</h3>
                    </div>
                <div className="brand_wrapper">
                <div className="brand_card">
                        <img src={cream} alt="" />
                        <h4>Lorem ipsum</h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                    </div>
                    <div className="brand_card">
                        <img src={make} alt="" />
                        <h4>Sed ut perspiciatis unde</h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                    <div className="brand_card">
                        <img src={glass} alt="" />
                        <h4>Ut enim ad minim</h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                    </div>
                    <div className="brand_card">
                        <img src={cotton} alt="" />
                        <h4>At vero eos eaccusamus</h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brand