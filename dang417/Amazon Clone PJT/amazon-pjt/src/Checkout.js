import React from 'react'
import './Checkout.css'

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src="https://ssl.pstatic.net/melona/libs/1455/1455334/654c7c5422e61c24622f_20230630134609673.jpg" alt="" />
        
        <div>
          <h2 className="checkout_title">
            장바구니
          </h2>
          {/* 장바구니 아이템들 */}

        </div>
      
      </div>
      <div className="checkout_right">
        <h2>장바구니 총 금액</h2>
      </div>


    </div>
  );
}

export default Checkout