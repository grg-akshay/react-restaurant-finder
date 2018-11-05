import React from 'react';
import '../styles/RestaurantListItem.css';
import '../styles/Details.css';
import {decideColor} from '../utils/decideColor';

export default function RestaurantItemBody(props) {
  return (
    <div>
      <span className={decideColor(props.rating)}>{props.rating}</span>
      <span> ({props.votes} votes)</span>
      <span className='res_review' >| &nbsp;&nbsp;   {props.reviews_count} reviews</span>  
    </div>
  )
}
