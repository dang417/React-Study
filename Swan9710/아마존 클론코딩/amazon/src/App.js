import './App.css';
import Header from "./Header"
import Home from "./Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from "./Login"
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe ('API_KEY')

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('사용자는 다음과 같습니다.', authUser)
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Header/>, <Home/>]}/>

          <Route path="/checkout" element={[<Header/>, <Checkout/>]}/>

          <Route path="/login" element={<Login/>}/>

          <Route 
            path="/payment" 
            element={[
              <Header/>, 
              <Elements stripe={promise}>
                <Payment/>
              </Elements>]}/>


        </Routes>
      </div>
    </Router>
  );
}

export default App;
