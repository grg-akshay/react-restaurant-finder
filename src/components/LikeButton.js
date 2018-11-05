import React, { Component } from 'react';
import {connect}  from 'react-redux';
import { setLike } from '../actions/like';
import { unsetLike } from '../actions/like';
import '../styles/RestaurantListItem.css';

class LikeButton extends Component {

    constructor(props){
        super(props);
        this.state={
            addClass: props.likes && props.likes.includes(props.res_id), //
        };
        this.toggle=this.toggle.bind(this);
    }

    toggle() {
        
        this.setState({addClass: !this.state.addClass});
    }

  render() {
    let boxClass = ['fa', 'fa-heart','fa-lg', 'fa-position', 'fa-unfill'];

    if(this.state.addClass) {
        boxClass.pop()
        boxClass.push('fa-fill');
    }
    return (
      <div>
        <span><div onClick={(e)=>{
           console.log('like ');
          if(this.props.likes && this.props.likes.includes(this.props.res_id)){
            //then remove
            this.props.dispatch(unsetLike(this.props.res_id));
            this.toggle();

          }else{
            this.props.dispatch(setLike(this.props.res_id));
            this.toggle();
          }
          
          
        }}><i className={boxClass.join(' ')} ></i></div></span>
      </div>
    )
  }
}


const mapStateToProps=(state,props)=>({
    likes: state.likes
});


export default connect(mapStateToProps)(LikeButton);
