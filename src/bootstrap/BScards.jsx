import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";

function BsCards() {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="pics/img1.jpeg" style={{width:"200px",height:"150px"}}/>
            <Card.Body>
              <Card.Title>Card Title 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="pics/img2.jpeg" style={{width:"200px",height:"150px"}}/>
            <Card.Body>
              <Card.Title>Card Title 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="pics/img3.jpeg" style={{width:"200px",height:"150px"}}/>
            <Card.Body>
              <Card.Title>Card Title 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BsCards;
