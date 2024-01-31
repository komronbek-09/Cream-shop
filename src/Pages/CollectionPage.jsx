import React from 'react'
import CollectionCard from '../component/CollectionCard'
import CollectionHero from '../component/CollectionHero'

function CollectionPage() {
  return (
    <div className='collectionPage'>
      <CollectionHero />
      <CollectionCard />
      
    </div>
  )
}

export default CollectionPage