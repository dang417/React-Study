import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='Home'>
            <div className='home-container'>
                <img className="home_image" src="/basic.png" alt="" />

                <div className='home_row'>
                    <Product id="2323" title="제품1" price={3000} image="http://en.pimg.jp/024/292/158/1/24292158.jpg" rating={5}/>

                    <Product id="2323" title="제품2" price={4500} image="http://en.pimg.jp/024/292/158/1/24292158.jpg" rating={5}/>
                </div>

                <div className='home_row'>
                    <Product id="2323" title="제품3" price={5000} image="http://en.pimg.jp/024/292/158/1/24292158.jpg" rating={5}/>

                    <Product id="2323" title="제품4" price={370000} image="http://en.pimg.jp/024/292/158/1/24292158.jpg" rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home