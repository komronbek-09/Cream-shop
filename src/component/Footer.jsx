import React from 'react'
import '../Style/footer.css'
import message from '../image/message_icons.png'
// import svg from '../image/arrow.svg'
import svg1 from '../image/facebook1.svg'
import svg2 from '../image/twiter.svg'
import svg3 from '../image/insta.svg'
function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_left">
            <h2>Join the club</h2>
            <p>Keep up with our new releases, beauty tips and what Winnie’s been up to. </p>
            <input type="email" id="arrow" placeholder='Email Address' />
            {/* <button typeof='email'>Email Address
              <img className='svg' src={svg} alt="" />
            </button> */}
            <div className="footer_icons">
              <div className="svg1">
                <img className='svg1' src={svg1} alt="svg" />
              </div>
              <div className="svg1">
                <img className='svg1' src={svg2} alt="svg" />

              </div>
              <div className="svg1">
                <img className='svg1' src={svg3} alt="svg" />
              </div>

            </div>
            <div className="footer_text">
              <h6>© 2021 Cream Shop</h6>
              <h6>Terms and conditions</h6>
              <h6>Privacy Policy</h6>
            </div>
          </div>
          <span className='footer_span'></span>
          <div className="footer_right">


            <ul className='footer_list'>
              <h2>Shop</h2>
              <li>Shop All</li>
              <li>Best Sellers</li>
              <li>Universal Mineral</li>
              <li>Isie Glow to Isle</li>
              <li>Deepwater</li>
              <li>Winne Selects</li>
            </ul>
            <ul className='footer_list'>
              <h2>Learn</h2>
              <li>About Us</li>
              <li>Ingredient Glossary</li>
              <li>Sun Care 101</li>
              <li>Our Journey</li>
            </ul>
            <ul className='footer_list'>
              <h2>Customer</h2>
              <li>Contact Us</li>
              <li>Help/FAQ</li>
              <li>My Account</li>
              <li>Shipping and Return</li>

            </ul>
            <img className='message' src={message} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer