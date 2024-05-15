import React, {useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Mpesa from './Mpesa';
import CreditCard from './CreditCard';
import OtherPaymentOptions from './OtherPaymentOptions';

function PymentOptions() {

    const [selectedRadio, setSelectedRadio] = useState(null);

    const handleRadioChange = (value) => {
        setSelectedRadio(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        // Add your form submission logic here
    };


  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row style={{display: 'flex', flexDirection: 'row'}}>
          <Col style={{marginRight: '10px'}}>
            <Form.Check 
              type="radio"
              label="M-pesa"
              name="radioGroup"
              id="radio1"
              onChange={() => handleRadioChange('radio1')}
              checked={selectedRadio === 'radio1'}
            />
          </Col>
          <Col style={{marginRight: '10px'}}>
            <Form.Check 
              type="radio"
              label="Credit Card"
              name="radioGroup"
              id="radio2"
              onChange={() => handleRadioChange('radio2')}
              checked={selectedRadio === 'radio2'}
            />
          </Col>
          <Col style={{marginRight: '10px'}}>
            <Form.Check 
              type="radio"
              label="Other Options"
              name="radioGroup"
              id="radio3"
              onChange={() => handleRadioChange('radio3')}
              checked={selectedRadio === 'radio3'}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {selectedRadio === 'radio1' && <Mpesa />}
            {selectedRadio === 'radio2' && <CreditCard />}
            {selectedRadio === 'radio3' && <OtherPaymentOptions />}
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default PymentOptions