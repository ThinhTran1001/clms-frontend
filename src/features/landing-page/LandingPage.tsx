import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardCustom from '../../components/ui/Card'; 

const LandingPage: React.FC = (title,description) => {
  const cardData = [
    {
      image: '/logo192.png',
      title: 'Featured Course',
      text: 'Discover our featured course of the month that will enhance your skills and knowledge.',
    },
    {
      image: '/logo192.png',
      title: 'Upcoming Events',
      text: 'Stay updated with our upcoming events and webinars that you can join.',
    },
    {
      image: '/logo192.png',
      title: 'Recent Blog Posts',
      text: 'Read our latest blog posts for insights, tips, and updates from the education world.',
    },
  ];

  return (
    <Container className="my-4" style={{paddingBottom: '50px'}}>
      <Row className="text-center mb-4">
        <Col>
          <h1>Welcome to CLMS</h1>
          <p>Your go-to platform for managing and exploring courses.</p>
        </Col>
      </Row>
      <Row>
        {cardData.map((card, index) => (
          <Col md={4} key={index}>
            <CardCustom image={card.image} title={card.title} text={card.text} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LandingPage;
