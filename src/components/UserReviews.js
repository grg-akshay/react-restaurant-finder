import React from 'react';
import '../styles/Summary.css';
import '../styles/RestaurantListItem.css';
import '../styles/Details.css';
import {decideColor} from '../utils/decideColor';

const  UserReviews = (props) => {
  const photo = require('../notAvailable.png');
  return (
    <div >
      {props.reviewsArr.map((data, index) =>{//map over starting 5 reviews
          return (
            <div key={index}>
              <div className='media-left'>
                <img src={data.review.user.profile_image || photo} alt='user' className='media-left__image user-image' />
              </div>
              <div className='media-body'>
                <h4 className='user-name'>{data.review.user.name}</h4>
                <h4 className='user-name'>RATED <span className={decideColor(data.review.rating)}>{data.review.rating+'.0'}</span></h4>
                <p> {data.review.review_text}</p> 
              </div>
            </div>
          )
        })}
    </div>
  )
}



export default UserReviews;
