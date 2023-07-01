import React from 'react'
import './Home.css'
import Product from './Product';
// import axios from 'axios'

function Home() {
  // set up the request parameters
  // const params = {
  //   api_key: "EA7303B10ACB46549693CFEC086701DF",
  //   type: "bestsellers",
  //   amazon_domain: "amazon.com",
  //   category_id: "bestsellers_appliances"
  // }
  // axios.get('https://api.rainforestapi.com/request', {params})
  // .then(response => {
  //     productData = response.data
  //   }).catch(error => {
  //     console.log(error);
  //   })

  let productData = [
    {
      id: 1,
      title: '스콰이어 Affinity Stratocaster MN WPG BLK 037-8002-506',
      price: 489000,
      image: 'https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2023/01/04/11/6/e132beee-15b9-4aca-95cd-a80372b1e45f.png',
      rating: 5
    },
    {
      id: 2,
      title: '스콰이어 Affinity Telecaster MN BPG BTB 037-8203-550',
      price: 489000,
      image: 'https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2023/01/04/11/6/96917fb4-bb9d-42c5-8963-6b3205d84ed2.png',
      rating: 4
    },
    {
      id: 3,
      title: '스콰이어 Bullet Mustang HH Laurel 기타',
      price: 359000,
      image: 'https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2022/12/29/11/5/e20fd8da-1d84-4a8e-9498-c5c7c56b33ce.png',
      rating: 3
    },
    {
      id: 4,
      title: '스콰이어 Affinity Stratocaster MN BPG 일렉기타',
      price: 619000,
      image: 'https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2022/12/29/9/5/9457cb3f-5706-43ff-8b5f-ad504e2ec237.png',
      rating: 5
    },
    {
      id: 5,
      title: '스콰이어 Bullet Tremolo HSS 일렉기타',
      price: 474000,
      image: 'https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/rs_quotation_api/lbjnundw/abbbc6e0965348d0bc2e97146b4336a5.jpg',
      rating: 4
    },
    {
      id: 6,
      title: '스콰이어 Affinity Stratocaster HH Laurel BPG OLW 037-8051-505',
      price: 359000,
      image: 'https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2023/01/04/11/6/b041369d-8441-4463-bea2-4e604e1f63b2.png',
      rating: 5
    },
  ]

  return (
    <div className="home">
      <div className="home-container">
        <img className="home_image" src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg" alt=""/>

        <div className="home_row">
          {
            productData.map((product, i) => {
              return <Product id={product.id} title={product.title} price={product.price} image={product.image} rating={product.rating}/> 
            })
          }   
        </div>
      </div>
    </div>
  )
}

export default Home;