// src/components/pages/Home.tsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const LandingPage: React.FC = () => {
  return (
    <Container className="my-4">
      <Row className="text-center mb-4">
        <Col>
          <h1>Welcome to CLMS</h1>
          <p>Your go-to platform for managing and exploring courses.</p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Featured Course</Card.Title>
              <Card.Text>
                Discover our featured course of the month that will enhance your skills and knowledge.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Upcoming Events</Card.Title>
              <Card.Text>
                Stay updated with our upcoming events and webinars that you can join.
              </Card.Text>
              <Button variant="primary">View Events</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Recent Blog Posts</Card.Title>
              <Card.Text>
                Read our latest blog posts for insights, tips, and updates from the education world.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
