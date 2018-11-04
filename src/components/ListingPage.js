import React, { Component } from 'react';
import {connect} from 'react-redux';
import RestaurantListItem from './RestaurantListItem';
import InfiniteScroll from "react-infinite-scroll-component";
import {thunkRestaurants} from '../actions/restaurant';
import '../styles/Summary.css';
import LoadingComponent from './LoadingComponent';

class ListingPage extends Component {

  constructor(props){
    super(props);
    this.state={
      start : 1
    }

    this.onScroll=this.onScroll.bind(this);
  }

  onScroll(){
    var start= this.state.start +5;
    this.setState((state)=>({
      start: state.start+5,
  }));

    this.props.dispatch(thunkRestaurants(this.props.city, start));
    
  };


  render() {
    const error=this.props.error;
    return (
      <div>
      
      {error ?<p>{error}</p>:
        <div>
          <div className='content-container outline page-header'>
            <h2 className="page-header__title"><small>Showing restaurants in </small>"<strong>{this.props.city}</strong>"</h2>
          </div>
          <InfiniteScroll
              dataLength={this.props.restaurants.length}
              next={this.onScroll}
              hasMore={true}
              loader={<LoadingComponent />}>
              {
              
                this.props.restaurants.map((rest, index) =>{
                  return <RestaurantListItem key={index} {...rest}  likes={this.props.likes} {...this.props}/>
                })
              }
          </InfiniteScroll> 
        </div>
        }
      
      </div>
    )
  }
};

const mapStateToProps =({restaurants, city, error, likes}, props)=>({
    restaurants,
    city,
    error,
    likes
})

export default connect(mapStateToProps)(ListingPage);