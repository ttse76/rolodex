import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import NewItemModal from 'components/elements/modals/NewItemModal';

export default function Home() {
  const [isNewItemModalOpen, setIsNewItemModalOpen] = useState(false);
  return (
    <Container>
      <Row>
        <Col>
          <Button onClick={() => setIsNewItemModalOpen(true)}>Open</Button>
        </Col>
      </Row>
      <NewItemModal open={isNewItemModalOpen} onClose={() => setIsNewItemModalOpen(false)} />
    </Container>
  );
}