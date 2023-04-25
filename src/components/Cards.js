import React from 'react'
import './Cards.css'
import CardItem from './CardItem'
import Card1_image from './images/img-2.jpg'
import Card2_image from './images/img-4.jpg'
import Card3_image from './images/img-3.jpg'
import Card4_image from './images/img-6.jpg'
import Card5_image from './images/img-5.jpg'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out EPIC destinations.</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src= {Card1_image}
                        text = "Explore the hidden waterfall deep Amazon jungle" 
                        label = "Adventure"
                        path = "/services"
                    />
                    <CardItem 
                        src= {Card2_image}
                        text = "Explore. Live and Let Live" 
                        label = "Adventure"
                        path = "/services"
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src= {Card3_image}
                        text = "Explore the hidden waterfall deep Amazon jungle" 
                        label = "Adventure"
                        path = "/services"
                    />
                    <CardItem 
                        src= {Card4_image}
                        text = "Explore. Live and Let Live" 
                        label = "Adventure"
                        path = "/services"
                    />
                    <CardItem 
                        src= {Card5_image}
                        text = "Explore. Live and Let Live" 
                        label = "Adventure"
                        path = "/services"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
