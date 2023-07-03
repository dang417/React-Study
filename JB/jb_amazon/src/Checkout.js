import React from 'react';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout(){
    const[{basket}] = useStateValue()
    // const[{basket, dispatch}] = useStateValue()
    return(
        <div className="checkout">
            <div className="checkout-left">
                <img className="checkout_ad" src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png" alt=""/>
                    <h2 className='checkout_title'>
                        장바구니입니다.
                    </h2>
            <div className='checkout_right'>
                {/* <h2> 장바구니 총 금액 </h2> */}
                <Subtotal/>
            </div>
            <hr/>
                <div>

         {basket.map(item => (
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            />

        ))
        }
                
                </div>
            </div>

        </div>
    );
}

export default Checkout;