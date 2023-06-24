import React from 'react'
import './Header.css'
import logo from './src_assets/amazon_logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
      <img src={logo} className='header_logo'/>

      <div className='header_search'>
        <input className='header_searchInput' type='text'/>
        <SearchIcon className="header_searchicon"/>
      </div>

      <div className='header_nav'>

        <div className='header_option'>
          <span className='header_optionLineOne'>안녕하세요!</span>
          <span className='header_optionLineTwo'>로그인하기</span>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne'>돌아가기</span>
          <span className='header_optionLineTwo'>주문내역</span>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne'>반가워요</span>
          <span className='header_optionLineTwo'>반가워요</span>
        </div>

        <div className='header_optionBasket'>
          <ShoppingBasket/>
          <span className='header_optionLineTwoheader_basketCount'>
            0
          </span>
        </div>



      </div>
    </div>
  );
}

export default Header;