import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket} , dispatch] = useStateValue()
    // const [dispatch] = useStateValue()

    
    const removeFromBasket = () => {
        //Removing items from basket
        console.log(basket)
        dispatch ({
            type : 'REMOVE_FROM_BASKET',
            id : id,
        })
    }

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct_image' src={image} alt="" />
    
         <div className='checkoutProduct_info'>
         <p className='checkoutProduct_title'>{title}</p>
         
         
         <p className='checkoutProduct_price'> 가격 :
         <strong>{price}</strong>
         <small>원</small>
         
         </p>
         

         <button onClick={removeFromBasket}>취소</button>

         </div>
        
    </div>
    
  )
}

export default CheckoutProduct
