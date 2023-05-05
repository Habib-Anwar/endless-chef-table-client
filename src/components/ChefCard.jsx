import React from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefCard = (props) => {

  const { picture, name, years_of_experience, number_of_recipes, likes } = props.information;
    
  return (

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1rem', width:'400px', marginLeft:'400px' }}>
    <Card>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        Years Of Experience:{years_of_experience}
        </Card.Text>
        <Card.Text>
        Number Of Recipes:{number_of_recipes}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small>Likes: {likes}</small>
       <Link to='/chefrecipes/:id'> <Button variant="info" size="lg" active style={{marginLeft:"30px", color:'white'}}>
        View Recipes
      </Button></Link>
      </Card.Footer>
    </Card>
</div>

  
  );
};

export default ChefCard;


{/* <Row xs={1} md={2} lg={3} className="g-4 mx-auto">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={picture} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row> */}