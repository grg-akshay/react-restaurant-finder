import React, { Component } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import {connect} from 'react-redux';
import '../styles/Summary.css';
import UserReviews from './UserReviews';
import LoadingComponent from './LoadingComponent';

class ReviewPage extends Component {
  constructor(props){
    super(props);
    this.state={
      reviews: this.props.restaurant.review.user_reviews.slice(0,5),
      start: 0,
      hasMore: true,
    }
    this.onScroll=this.onScroll.bind(this);
    
  }

  onScroll(restaurant){
    if(this.props.restaurant.review.user_reviews.length <=this.state.reviews.length ){
      this.setState((prevState)=>({
         ...prevState,
         hasMore: false,
       }))
       return;
     }
    setTimeout(() => {
      this.setState((prevState) =>({
        reviews : [...prevState.reviews, ...this.props.restaurant.review.user_reviews.slice(prevState.start, prevState.start+5)],
        start: prevState.start +5,

      }));
    }, 500);
  
  }

  render() {
    console.log(this.props.restaurant);
    //console.log('props.match.params.id: ',props.match.params.id);
    const reviewsArr = this.props.restaurant.review.user_reviews;
    return (
      <div className='content-container content'>
      <h2 className="page-header__title"><strong>Reviews</strong></h2>
        
      <hr />
      <InfiniteScroll
              dataLength={this.props.restaurant.length}
              next={()=>{this.onScroll(this.props.restaurant)}}
              hasMore={this.state.hasMore}
              loader={<LoadingComponent />}>
              {
                 <UserReviews reviewsArr={reviewsArr} />
              }
      </InfiniteScroll> 
     
    </div>  
    )
  }
}

const mapStateToProps=(state,props)=>({
  restaurant: state.restaurants.find((restaurant)=> {
    return restaurant.restaurant.id === props.match.params.id; 
  })
})

export default connect(mapStateToProps)(ReviewPage);