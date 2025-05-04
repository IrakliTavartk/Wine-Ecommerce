import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrums from '../components/BreadCrums/BreadCrums';

const Product = () => {
const{all_product}= useContext(ShopContext);
const{productId}= useParams();
console.log(product)

const product = all_product.find((e)=> e.id === Number(productId));
console.log(product)
  return (
    <div>
      {/* <BreadCrums product={product}/> */}
    </div>
  )
}

export default Product
