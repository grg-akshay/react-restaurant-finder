import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
        <div className='App-name'>
          <div className='App-symbol'>
            <i className='fa fa-cutlery fa-3x black' aria-hidden='true' />
          </div>
          <div className='App-title'>
          <Link className='App-title__link'to='/'>
            Tomatoes
            <br/> <small>&nbsp;Restaurant Finder</small>
          </Link>
          </div>
        </div>
  )
};