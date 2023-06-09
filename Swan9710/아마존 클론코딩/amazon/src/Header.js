import React from 'react'
import './Header.css'
import logo from './src_assets/amazon_logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{basket, user}, dispatch] = useStateValue()

  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <div className='header'>
      <Link to="/">
        <img src={logo} className='header_logo' alt=''/>
      </Link>

      <div className='header_search'>
        <input className='header_searchInput' type='text'/>
        <SearchIcon className="header_searchicon"/>
      </div>

      <div className='header_nav'>

        <div className='header_option'>
          <span className='header_optionLineOne'>안녕하세요!</span>
          <Link to={!user && '/login'} className='homelogin'>
            <span onClick={handleAuthentication} className='header_optionLineTwo'>{user ? '로그아웃' : '로그인'}</span>
          </Link>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne'>돌아가기</span>
          <span className='header_optionLineTwo'>주문내역</span>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne'>반가워요</span>
          <span className='header_optionLineTwo'>반가워요</span>
        </div>

        <Link to="/checkout">
          <div className='header_optionBasket'>
            <ShoppingBasket/>
            <span className='header_optionLineTwoheader_basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>



      </div>
    </div>
  );
}

export default Header;