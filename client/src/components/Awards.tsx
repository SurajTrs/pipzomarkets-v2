import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Awards: React.FC = () => {
  const awards = [
    {
      title: "Best Mobile Trading Platform 2024",
      image: "/images/award-mobile.png",
    },
    {
      title: "Top Broker of the Year",
      image: "/images/award-broker.png",
    },
    {
      title: "Most Trusted Platform",
      image: "/images/award-trusted.png",
    },
  ];

  return (
    <section className="awards-section py-5 text-light">
      <Container>
        <h2 className="text-center fw-bold mb-5 ">
          Our Achievements
        </h2>
        <Row className="g-4 justify-content-center">
          {awards.map((award, index) => (
            <Col md={4} sm={6} key={index}>
              <Card className="award-card text-center h-100 border-0 shadow-sm">
                <Card.Img
                  variant="top"
                  src={award.image}
                  alt={award.title}
                  className="p-4"
                  style={{ height: '180px', objectFit: 'contain' }}
                />
                <Card.Body>
                  <Card.Title className="fw-semibold text-light fs-5">{award.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Awards;
