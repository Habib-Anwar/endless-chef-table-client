import React from 'react';
import { Carousel } from 'react-bootstrap';
import chef1 from '../assets/images/chef-1.jpeg'
import chef2 from '../assets/images/chef-2.jpeg'
import chef3 from '../assets/images/chef-3.jpeg'

const Home = () => {
    return (
        <Carousel>
        <Carousel.Item interval={1000}>
          <img style={{height:'500px'}}
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
            style={{height:'500px'}}
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
            style={{height:'500px'}}
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
    );
};

export default Home;