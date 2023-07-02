import React from 'react';
import './Home.css';
import Product from './Product';

function Home () {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src='https://images.idgesg.net/' alt=""/>

        <div className='home_row'>
          <Product
          id="1"
          title="제품1" 
          image="https://en.pimg.Jp/024/292/158/1/24292158.jpg" 
          price={3000} 
          rating={5}
          />

          <Product
          id="2"
          title="제품2" 
          image="https://en.pimg.Jp/024/292/158/1/24292158.jpg" 
          price={200} 
          rating={3}
          />
        </div>

        <div className='home_row'>
          <Product
          id="3"
          title="제품3" 
          image="https://en.pimg.Jp/024/292/158/1/24292158.jpg" 
          price={5000} 
          rating={3}
          />

          <Product
          id="4"
          title="제품4" 
          image="https://en.pimg.Jp/024/292/158/1/24292158.jpg" 
          price={23532523235} 
          rating={3}
          />
        </div>

        <div className='home_row'>
          <Product
          id="5"
          title="제품5" 
          image="https://en.pimg.Jp/024/292/158/1/24292158.jpg" 
          price={2425} 
          rating={3}
          />
        </div>

      </div>
    </div>
  )
}
export default Home;