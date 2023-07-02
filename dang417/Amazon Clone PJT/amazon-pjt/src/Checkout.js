import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue()
  return (
    <div className="checkout_container">
      <div className="checkout">
        <div className="checkout_left">
          <div>
            <h2 className="checkout_title">
              {user?.email}의 장바구니
            </h2>
            {/* 장바구니 아이템들 */}
            {basket.map(item => (
              <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
              ))}
          </div>
        </div>

        <div className="checkout_right">
          <Subtotal/>
        </div>

      </div>
      <div className="checkout_footer">
        <img className="checkout_ad" src="https://ssl.pstatic.net/melona/libs/1455/1455334/654c7c5422e61c24622f_20230630134609673.jpg" alt="" />
      </div>
    </div>
  );
}

export default Checkout