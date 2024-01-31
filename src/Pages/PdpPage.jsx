import React from 'react'
import Universal from '../component/Universal'
import Gloss from '../component/Gloss'
import Product from '../component/Product'
import Customer from '../component/Customer'

function PdpPage() {
  return (
    <div>
      <Universal />
      <Gloss />
      <Product  text='You might also like'/>
      <Customer />
        </div>
  )
}

export default PdpPage