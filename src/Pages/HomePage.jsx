import React from 'react'
import Hero from '../component/Hero'
import Product from '../component/Product'
import Brand from '../component/Brand'
import Collection from '../component/Collection'
import Ingredient from '../component/Ingredient'
import Sed from '../component/Sed'
import Nemo from '../component/Nemo'
import Featured from '../component/Featured'

function HomePage() {
  return (
    <div>
      <Hero />
      <Product text='Discover our products' title='Shop all'/>
      <Brand />
      <Collection />
      <Ingredient />
      <Sed />
      <Nemo />
      <Featured />
    </div>
  )
}

export default HomePage