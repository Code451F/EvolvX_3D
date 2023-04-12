import React from 'react'
import globe from '../assets/3d_globe.png'

function Globe() {
  return (
    <div>
      <img className='globe-photo' src={globe} alt={"globe"}/>
    </div>
  )
}

export default Globe