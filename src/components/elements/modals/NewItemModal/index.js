import { useState, useEffect } from 'react';

import Modal from 'react-bootstrap/Modal';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AddNewLoyaltyProgram from './AddNewLoyaltyProgram';

export default function NewItemModal({
  open,
  onClose,
  onSubmit
}) {
  const [itemType, setItemType] = useState('');
  const [form, setForm] = useState(<></>);

  useEffect(() => {
    switch (itemType) {
      case 'loyaltyprogram':
        setForm(<AddNewLoyaltyProgram onSubmit={onSubmit} />);
        break;
      default:
        setForm(<></>);
    }
  }, [itemType]);

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
                  <InputLabel id="itemTypeSelect">Item Type</InputLabel>
                  <Select
                  labelId="itemTypeSelect"
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
          <Row className="pt-3">
            <Col>
              {form}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}