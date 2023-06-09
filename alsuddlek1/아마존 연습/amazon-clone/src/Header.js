import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasket from '@mui/icons-material/ShoppingBasket'
import { Link } from 'react-router-dom'
import {useStateValue} from "./StateProveder"

function Header(){
    const [{basket}, dispatch] = useStateValue()

    return (
    <div className="header">
        <Link to="/">
        <img className="header-logo" src="/amazon-logo.png"/> 
        </Link>
        <div className='header_search'>
            <input className='header_searchInput' type='text' />
            <SearchIcon className="header_searchIcon"/>
            
        </div>
        <div className='header_nav'>

            <div className='header_option'>
                <span className='header_optionLineOne'>안녕하세요</span>
                <Link to="/login" clasName="homelogin">
                <span className='header_optionLineTwo'>로그인하기</span></Link>
            </div>

            <div className='header_option'>
                <span className='header_optionLineOne'>돌아가기</span>
                <span className='header_optionLineTwo'>주문내역</span>
            </div>

            <div className='header_option'>
                <span className='header_optionLineOne'>반가워요</span>
                <span className='header_optionLineTwo'>구독과좋아요</span>
            </div>

            <Link to="/checkout">
            <div className='header_optionBasket'>
                <ShoppingBasket/>
                <span className='header_optionLineTwoheader_basketCount'>
                    {basket?.length}
                    {/* ? : null 이면 error 안띄움 */}
                </span>
            </div>
            </Link>
        </div>
    </div>
    )
}

export default Header