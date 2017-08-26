import React, { Component } from 'react';
import Navbar from './navbar';
import SearchBar from './searchbar';
import GifContainer from './gifcontainer';
import {Image} from 'react-bootstrap';
import '../App.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className="container">
          <a href="https://www.giphy.com" target='_blank' rel="noopener noreferrer">
            <Image src='https://www.inboxsdk.com/images/logos/giphy.png' className='logo' alt='Giphy logo' responsive />
          </a>
          <SearchBar />
          <GifContainer />
        </div>
      </div>
    );
  }
}
