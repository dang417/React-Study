import React from 'react';
import './Header.css'
import logo from './src_assets/amazon_logo.png'

function Header() {
  return (
    <div className='header'>
      <img src={logo} className='header_logo'/>

      <div className='header-search'>
        <input className='header_searchInput' type='text'/>
      </div>

      <div className='header_nav'>

        <div className='header_caption'>
          <span className='header_optionLineOne'>안녕하세요!</span>
          <span className='header_optionLineTwo'>로그인하기</span>
        </div>

        <div className='header_caption'>
          <span className='header_optionLineOne'>돌아가기</span>
          <span className='header_optionLineTwo'>주문내역</span>
        </div>

        <div className='header_caption'>
          <span className='header_optionLineOne'>반가워요</span>
          <span className='header_optionLineTwo'>반가워요</span>
        </div>



      </div>
    </div>
  );
}

export default Header;