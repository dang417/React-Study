import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header">
      <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="#" className="header_logo" />

      <div className="header_search">
        <input className="header_searchInput" type="text" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">안녕하세요</span>
          <span className="header_optionLineTwo">로그인</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">돌아가기</span>
          <span className="header_optionLineTwo">주문내역</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">반가워요</span>
          <span className="header_optionLineTwo">아이디</span>
        </div>
      </div>
    </div>
  )
}

export default Header