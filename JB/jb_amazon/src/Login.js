import React from 'react'
import './Login.css'
// import {Route, Routes} from "react-router-dom"
import {Link, useNavigate} from'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const signIn = () => {
      navigate('https://localhost:3000/')
    }
  return (
    <div className='login'>
    <Link to='/'>
    <img className='login_logo'
    alt="logo"
     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"  />
    </Link>


    <div className='login_container'>
    <h1>Sign-in</h1>

    <form>
        <h5>E-mail</h5>
        <input type='email'/>

        <h5>Password</h5>
        <input type="password"/>

        <button type='submit' className = 'login_signInButton' >Continue</button>
    </form>

    <p className='terms'>Amazon의 이용 약관 및 개인 정보 보호 정책에 동의한다면 로그인하세요</p>
    <p className="amazon_register">아마존 사용이 처음이십니까?</p>

    <button className='login_registerButton' onChange={signIn}>새 계정 만들기</button>

    </div>
    
      
    </div>
  )
}

export default Login
