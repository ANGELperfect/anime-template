import React from 'react';
import './App.css';
import AnimeBg from './components/anime-bg'
import AnimeCover from './components/anime-cover'
import star from './star.png'
import fb from './facebook (1).png'
import tw from './twitter (1).png'

const App = () => {
  return (
    <div className="App">
      <AnimeBg/>
      <AnimeCover/>
      <div className="status"><h3>Finished</h3></div>
      <div className="watch">
        <div><h2>Watch</h2></div>
        <img src={star} alt="rate"/>
      </div>
      <div className="card-infos">
        <h1>Naruto Shippuden</h1>
        
        <div className="cat"><p>Action</p></div>
        <div className="rate">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="infos"><p><span>Author : </span>Masashi Kishimoto</p></div>
        <div className="infos"><p><span>Episodes : </span>500</p></div>
        <div className="infos"><p><span>Subtitles : </span>English</p></div>
      </div>
      <div className="desc">
        <p>
          <span>Description : </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris 
          vitae ultricies leo integer malesuada nunc vel risus .. 
          <span> show more </span>
        </p>
      </div>
      <div className="footer">
        <p>Follow Us</p>
        <img src={tw} alt="twitter"/>
        <img src={fb} alt="facebook"/>
      </div>
    </div>
  );
}

export default App;
