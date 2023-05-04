import React, { useEffect, useState } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import chef1 from '../assets/images/chef-1.jpeg'
import chef2 from '../assets/images/chef-2.jpeg'
import chef3 from '../assets/images/chef-3.jpeg'
import ChefInfo from './ChefInfo';
import ChefCard from './ChefCard';
import recipe1 from '../assets/images/recipe-1.jpeg'
import recipe2 from '../assets/images/recipe-2.jpg'
import recipe3 from '../assets/images/recipe-3.jpg'
import bg from '../assets/images/bg-8.png'

const Home = () => {

  return (
    <div className='container'>
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img style={{ height: '500px' }}
              className="d-block w-100"
              src={chef1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Welcome & Enjoy World-Class Cuisine</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              style={{ height: '500px' }}
              className="d-block w-100"
              src={chef2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>We'll Take Care Of All The Details</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '500px' }}
              className="d-block w-100"
              src={chef3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Delicious Food Is My Passion</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <ChefInfo></ChefInfo>
      <div className='d-flex mt-4 gap-4'>
        <div>
          <img
            className="d-block w-100"
            src={recipe1}
            alt="First slide"
            style={{ height: '400px', width: '550px', borderRadius: '20px', opacity: '0.85' }}
          />
          <div style={{ marginTop: "-150px", marginLeft: '100px', color: 'black' }}>
            <h3>Catering Service</h3>
            <p>Wouldn't you like to be a guest at your own party?</p>
          </div>
        </div>
        <div>
          <img
            className="d-block w-100"
            src={recipe2}
            alt="First slide"
            style={{ height: '400px', width: '550px', borderRadius: '20px', opacity: '0.75' }}
          />
          <div style={{ marginTop: "-150px", marginLeft: '100px', color: 'black' }}>
            <h3>Table Ready Meals</h3>
            <p>Are you too busy to cook?</p>
          </div>
        </div>
        <div>
          <img
            className="d-block w-100"
            src={recipe3}
            alt="First slide"
            style={{ height: '400px', width: '550px', borderRadius: '20px', opacity: '0.75' }}
          />
          <div style={{ marginTop: "-150px", marginLeft: '100px', color: 'black' }}>
            <h3>Sample Menus</h3>
            <p>Look through our latest menus!</p>
          </div>
        </div>
      </div>
      <div className='mt-5 d-flex gap-4'>
        <div className='mt-5'>
          <img src={bg} alt="" />
        </div>
        <div className='mt-5'>
          <h2>
            Experience The Sublime!
            </h2>
            <p>
            Chef Alanzo prepares and serves exquisite dinners to parties from two to 200 at your home, business or private catering event. His blend of French-Mediterranean cuisine draws on a lifetime of skills and the knowledge that all meals, no matter how large or how small, are special events among family and friends
            </p>
        </div>
      </div>
    </div>

  );
};

export default Home;