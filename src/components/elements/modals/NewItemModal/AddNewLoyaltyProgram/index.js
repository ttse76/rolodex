import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const ProgramTypes = {
  airline: 'Airline',
  hotel: 'Hotel',
  resturant: 'Resturant',
  rentalcar: 'Rental Car'
};

const RewardTypes = {
  points: 'Points',
  miles: 'Miles',
  cashback: 'Cash Back'
};

export default function AddNewLoyaltyProgram({
  onSubmit
}) {
  const [programName, setProgramName] = useState('');
  const [programType, setProgramType] = useState('');
  const [rewardType, setRewardType] = useState('');
  const [company, setCompany] = useState('');

  const submitForm = () => {
    onSubmit({
      type: 'loyaltyprogram',
      data: {
        programName,
        programType,
        rewardType,
        company
      }
    });
  };

  const programTypeItems = Object.keys(ProgramTypes).map((key, i) => {
    return <MenuItem key={`program${i}`} value={key}>{ProgramTypes[key]}</MenuItem>;
  });

  const rewardTypeItems = Object.keys(RewardTypes).map((key, i) => {
    return <MenuItem key={`rewards${i}`} value={key}>{RewardTypes[key]}</MenuItem>;
  });

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Program Name</Form.Label>
              <Form.Control 
                type="text"
                id="programName"
                value={programName}
                onChange={e => setProgramName(e.target.value)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Company</Form.Label>
              <Form.Control 
                type="text"
                id="company"
                value={company}
                onChange={e => setCompany(e.target.value)} />
            </Form.Group>

            <Form.Group className="pt-4">
              <FormControl fullWidth>
                <InputLabel id="typeLabel">Program Type</InputLabel>
                <Select
                  labelId="typeLabel"
                  value={programType}
                  label="Program Type"
                  onChange={e => setProgramType(e.target.value)}
                  >
                  {programTypeItems}
                </Select>
              </FormControl>
            </Form.Group>

            <Form.Group className="pt-4">
              <FormControl fullWidth>
                <InputLabel id="rewardLabel">Reward Type</InputLabel>
                <Select
                  labelId="rewardLabel"
                  value={rewardType}
                  label="Reward Type"
                  onChange={e => setRewardType(e.target.value)}
                  >
                  {rewardTypeItems}
                </Select>
              </FormControl>
            </Form.Group>

            <div className="pt-2">
              <Button onClick={submitForm}>Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}