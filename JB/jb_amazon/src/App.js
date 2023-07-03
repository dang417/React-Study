import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Route, Routes} from'react-router-dom';
import Login from './Login';
import Footer from './Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={[<Header/>, <Home/>]}/>

      <Route path="/checkout" element={[<Header/>, <Checkout/>]}></Route>
      
      <Route path="/login" 
                element = {<Login />}
                />
      </Routes>
    </div>
    <Routes>
        <Route path="/" 
          element = {<Footer />}
        />
      </Routes>
    </Router>
    
  );
}

export default App;
