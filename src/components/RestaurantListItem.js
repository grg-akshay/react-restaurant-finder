import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/RestaurantListItem.css';
import '../styles/Details.css';
import RestaurantItemBody from '../components/RestaurantItemBody';
// import {decideColor} from '../utils/decideColor';
import { setLike } from '../actions/like';
import { unsetLike } from '../actions/like';

const photo = require('../notAvailable.png');


const RestaurantListItem = (props)=> {
  return (
    
    
      <div className='media content content-container'>
        
          
            <div className='media-left'>
            <Link to={`/detail/${props.restaurant.id}`} ><img src={props.restaurant.thumb || photo} alt='thumb' className='media-left__image' /></Link>
            </div>
            
            <div className='media-body'>
            <Link to={`/detail/${props.restaurant.id}`} ><h3 className='restaurant-name res_name'>{props.restaurant.name}</h3> </Link>
              <RestaurantItemBody rating={props.restaurant.user_rating.aggregate_rating} votes={props.restaurant.user_rating.votes} reviews_count={props.review.reviews_count}/>       
              <span><button onClick={(e)=>{
                console.log('like ', props.restaurant.id);
                if(props.likes && props.likes.includes(props.restaurant.id)){
                  //then remove
                  props.dispatch(unsetLike(props.restaurant.id));
                  e.target.innerText='Like';
                }else{
                  props.dispatch(setLike(props.restaurant.id));
                  e.target.innerText='Liked';
                }
                
                
              }}>{props.likes && props.likes.includes(props.restaurant.id)?'Liked': 'Like'}</button></span>

        
            </div>
          
        
      </div>
    
   
  )
}
export default RestaurantListItem;