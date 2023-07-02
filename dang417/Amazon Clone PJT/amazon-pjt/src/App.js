import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
    onAuthStateChanged(auth, authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/> } /> 
          <Route path="/login" element={<Login/>}/>
          <Route path="/checkout" element={ <Checkout/> } />
          <Route path="/payment" element={ <Payment/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
