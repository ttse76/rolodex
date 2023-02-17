import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function NewItemModal({ open, onClose }) {
  const [itemType, setItemType] = useState('');

  return (
    <Modal show={open} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col lg={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <Select
                  value={itemType}
                  label="Item Type"
                  onChange={e => setItemType(e.target.value)}
                  >
                    <MenuItem value="loyaltyprogram">Loyalty Program</MenuItem>
                    <MenuItem value="creditcard">Credit Card</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}