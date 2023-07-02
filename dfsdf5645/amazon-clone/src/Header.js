import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from'react-router-dom';
import {useStateValue} from "./StateProvider";

function Header(props) {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to="/">
        <img className="header_logo" src="https://www.pngfind.com/pngs/b/56-565024_amazon-png.png" alt="none"/>
      </Link>
      <div className='header_search'>
        <input className='header_searchInput' type="text"/>
        <SearchIcon className="header_searchIcon"/>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">안녕하세요!</span>
          <Link to="/login" className="homelogin">
          <span className="header_optionLineTwo">로그인하기</span>
          </Link>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">돌아가기</span>
          <span className="header_optionLineTwo">주문내역</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">반가워요</span>
          <span className="header_optionLineTwo">구독과좋아요</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon/>
            <span className="header_optionLineTwoheader_basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>

      
    </div>
  );
}

export default Header;