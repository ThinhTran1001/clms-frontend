import React from 'react';
import { Card } from 'react-bootstrap';
import Button from './Button';

interface CardCustomProps {
  image: string;
  title: string;
  text: string;
}

const CardCustom: React.FC<CardCustomProps> = ({ image, title, text }) => {
  return (
    <Card className="text-center" style={{ width: '18rem', backgroundColor: '#E7E8D8' }}>
      <Card.Img variant="top" src={image} alt="Card image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button>Go somewhere <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Button>
      </Card.Body>
    </Card>
  );
};

export default CardCustom;
