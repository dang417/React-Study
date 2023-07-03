import React from 'react';
import './Product.css'
import {useStateValue} from './StateProvider';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

function Product({id, title, image, price,rating,ratinghalf}){
    const [{basket},dispatch] = useStateValue();
    // const [{basket}, dispatch] = useStateValue();
    // console.log ("This is basket" ,basket)
    const addToBasket = () => {
    console.log ("This is basket" ,basket)    

    dispatch({
        type: 'ADD_TO_BASKET',
        item:{
            id,
            title,
            image,
            price,
        },
    });
};

    return(
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className='product_price'>
                    <small>가격</small>
                    <strong>{price}</strong>
                    <small>원</small>
                </p>

                <div className='product_rating'>
                {Array(rating)
    .fill().map((_,i)=> (
      <p key={i} className='star_rating'>
       <StarIcon className='star'/> 
    
      </p>
    ))}
    {Array(ratinghalf)
    .fill().map((_,i)=> (
      <p key={i} className='star_rating'>
       <StarHalfIcon className='star'/> 
    
      </p>
    ))}
                </div>
            </div>

            <img src={image} alt="" />
            <button onClick={addToBasket}>장바구니에 담기</button>
        </div>
    );
}

export default Product;