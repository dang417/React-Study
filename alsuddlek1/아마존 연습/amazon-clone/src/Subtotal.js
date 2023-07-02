import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from "./StateProveder"
import { getBaseketTotal } from './Reducer'

function Subtotal(){
    const [{basket}, dispatch] = useStateValue()
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>
                        총액 ({basket.length} items) : <strong> {value}원</strong>
                    </p>
                    <small className='subtotal_gift'>
                        <input type="checkbox" /> 체크박스입니다
                    </small>
                    </>
                )}

            decimalScale = {2}
            value = {getBaseketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₩"}
            />

            <button>결제하기</button>
        </div>
    )
}

export default Subtotal;