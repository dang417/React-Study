import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';

function App() {
  const [{},dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser)
      if (authUser) {
        dispatch({
          type : 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user : null
        })
      }
    })
  },[])
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/payment" element={[<Header/>,<Payment/>]}/>
          <Route path="/login" element={<Login/>}/>
          <Route exact path="/" element={[<Header/>,<Home/>]}/>
          <Route path="/checkout" element={[<Header/>,<Checkout/>]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
