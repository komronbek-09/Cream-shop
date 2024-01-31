import React from 'react'
import '../Style/cardContent.css'
import cardContent1 from '../image/swiper3-removebg-preview.png'
import cupon from '../image/cupon.svg'
function CardContent() {
  return (
    <section className='cardContent'>
      <div className="container">
        <div className="cardContent_wrapper">
          <p className='title1'>Home/ <span>My Cart</span></p>
          <h2>My Cart</h2>
          <input type="range"  id="range" />
          
          <h4 className='title2'>$12.00 away from Free Shipping</h4>
          <div className="cardContent_box">

            <div className="cardContent_text">
              <h6>Product</h6>

              <ul>
                <li>Price</li>
                <li>Quantity</li>
                <li>Total</li>
              </ul>
            </div>
            <hr />
            <div className="cardContent_card">
              <div className="cardContent_content">
                <div className="cardContent_img">
                  <img className='cardContent_img' src={cardContent1} alt="" />
                </div>
                <div className="cardContent_title">
                  <h4>Universal mineral face lotion SPF55</h4>
                  <h3>Size: 1.7 fl oz</h3>
                  <h3>One Time Purchase</h3>
                  <h5>Remove</h5>
                </div>
              </div>
              <div className="btn_title">
                <p>$28.000</p>
                <div className="btn_text">
                  <p>-</p>
                  <h3>1</h3>
                  <h6>+</h6>
                </div>
                <p>$28.000</p>

              </div>
            </div>
            <hr />
            <div className="cardContent_card">
              <div className="cardContent_content">
                <div className="cardContent_img">
                  <img className='cardContent_img' src={cardContent1} alt="" />
                </div>
                <div className="cardContent_title">
                  <h4>Deepwater Dew Body Serum</h4>
                  <h3>Size: 3.4 fl oz</h3>
                  <h3>One Time Purchase</h3>
                  <h5>Remove</h5>
                </div>
              </div>
              <div className="btn_title2">
                <p>$28.000</p>
                <div className="btn_text">
                  <p>-</p>
                  <h3>1</h3>
                  <h6>+</h6>
                </div>
                <p>$28.000</p>

              </div>
            </div>
            <hr />
            <div className="cardContent_card">
              <div className="cardContent_content">
                <div className="cardContent_img">
                  <img className='cardContent_img' src={cardContent1} alt="" />
                </div>
                <div className="cardContent_title">
                  <h4>Isle Glow Face Lotion SPF45</h4>
                  <h3>Size: 1.5 fl oz</h3>
                  <h3>One Time Purchase</h3>
                  <h5>Remove</h5>
                </div>
              </div>
              <div className="btn_title3">
                <p>$28.000</p>
                <div className="btn_text">
                  <p>-</p>
                  <h3>2</h3>
                  <h6>+</h6>
                </div>
                <p>$56.000</p>

              </div>
            </div>
            <hr />
            <div className="cardContent_card">
              <div className="cardContent_content">
                <div className="cardContent_img">
                  <img className='cardContent_img' src={cardContent1} alt="" />
                </div>
                <div className="cardContent_title">
                  <h4>Isle Lip Balm SPF30</h4>
                  <h3>Size: 0.5 fl oz</h3>
                  <h3>(100% OFF)</h3>
                  <h5>Remove</h5>
                </div>
              </div>
              <div className="btn_title4">
                <p>$28.000</p>
                <div className="btn_text">
                  <p>-</p>
                  <h3>1</h3>
                  <h6>+</h6>
                </div>
                <p>$28.000</p>

              </div>
            </div>
            <hr />
          </div>
          <div className="registar_wrapper">
            <div className="type_message">
              <h4>Order Notes</h4>
              <div className="type">
                <input type="message"  id=""  placeholder='Type Message...'/>
              </div>
            </div>
            <div className="subtotal">
              <div className="subtotal_text">
              <h4>Subtotal</h4>
              <h3>$112.00</h3>
              </div>
              
              <p>Shipping and tax calculated at checkout.</p>
              <div className="subtotal_title1">
                <img src={cupon} alt="" />
              <h4>Auto</h4>
              <h3>-$10.00</h3>
              </div>
              <div className="subtotal_title2">
              <h4>Total</h4>
              <h3>$102.00</h3>
              </div>
              <button>Secure Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardContent