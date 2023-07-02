import React from 'react';
import './Payment.css'
import CheckoutProduct from "./CheckoutProduct";
import {Link} from "react-router-dom";
import {getBasketTotal} from "./reducer";


function Payment() {
    return (
        <div className="payment">
            <div className='payment_container'>


                <Link to="/checkout">
                    <h1>
                        장바구니 다시 설정하기 ({basket?.length} items )
                    </h1>
                </Link>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3> 배달 받을 곳 </h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>서울특별시</p>
                        <p>마포구 합정동</p>
                    </div>

                </div>


                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3> 리뷰와 배달 </h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}

                    </div>
                </div>


                <div className='payment_section'>

                    <div className='payment_title'>
                        <h3>결제 방법</h3>

                    </div>
                    <div className="payment_details">

                        <form onSubmit={handleSubmit}>

                            <CardElement onChange={handleChange}/>

                            <div className='payment_priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (

                                        <h3> 총액 : {value} 원</h3>
                                    )}

                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₩"}
                                />



                                    <span>{processing ? <p>처리중</p> : "구매하기"}</span>
                         
                            </div>

                                        </form>


                    </div>
                </div>


            </div>
        </div>
    );
}

export default Payment;
