import React from 'react'
import { Button } from './Button';
import '../App.css';
import './Hero.css';
import video from './videos/video-1.mp4'

function Hero() {
  return (
    <div className='hero-container'>
      
      <h1>Adventue awaits</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btn'>
        <Button className="btns" buttonStyle= "btn--outline" buttonSize = "btn--large">GET STARTED</Button>
        <Button className="btns" buttonStyle= "btn--primary" buttonSize = "btn--large">Watch Trailer <i className='far fa-play-circle' /></Button>
      </div>
    </div>
  )
}

export default Hero
