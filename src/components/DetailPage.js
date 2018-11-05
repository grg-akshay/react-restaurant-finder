import React from 'react';
import {connect} from 'react-redux';
import '../styles/Details.css';
import '../styles/RestaurantListItem.css';
import UserReviews from './UserReviews';
import {decideColor} from '../utils/decideColor';
import LikeButton from '../components/LikeButton';

const DetailPage= (props) => {

  const restaurant=props.restaurant.restaurant;
  const review =props.restaurant.review;
  const reviewsArr=review.user_reviews.slice(0,5);//starting 5 reviews
  const photo = require('../notAvailable.png');
  return (
    <div className='content-container content'>
        {/* Restaurant details with id of {props.match.params.id} */}
        <img src={restaurant.featured_image || photo} alt='...' className='featured-image' />
        <h3 className='restaurant-name'>
          {restaurant.name} 
        </h3>

        <span className={decideColor(restaurant.user_rating.aggregate_rating)}>{restaurant.user_rating.aggregate_rating}</span>
        <span> ({restaurant.user_rating.votes} votes)</span>
        <span className='res_review' >| &nbsp;&nbsp; {review.reviews_count} reviews</span>  
        

        <LikeButton res_id={props.match.params.id} likes={props.likes} />
        <hr />

        <p><strong>Cuisines: </strong>{restaurant.cuisines}</p>
        <p><strong>Cost for two:  </strong> {restaurant.currency}{restaurant.average_cost_for_two}</p>
        <hr />

        <p><strong>Address:</strong></p>
        <p>{restaurant.location.address}</p>
        <hr />

        <p><strong>Reviews</strong></p>
        <UserReviews reviewsArr={reviewsArr} />
        <button onClick={(e) =>{
             props.history.push(`/review/${props.match.params.id}`);
        }}>View more reviews</button>
        
    </div>
  )
}

export const mapStateToProps=(state, props) => {
    return {
        restaurant: state.restaurants.find((restaurant)=> {
            return restaurant.restaurant.id === props.match.params.id; 
            }),
        likes: state.likes
    }
}

export default connect(mapStateToProps)(DetailPage);