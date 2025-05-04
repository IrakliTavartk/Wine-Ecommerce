import React from 'react'
import './BreadCrums.css'
import arrow_icon from '../assets/Assets/arrow.png'


const BreadCrums = (props) => {
    console.log(props)
    const {product} = props; 
    console.log("this is product:",product)
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name} <img src={arrow_icon} alt="" />
    </div>
  )
}

export default BreadCrums
