import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import Product from './components/Product'

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

  const [date, setDate] = useState(new Date())
  const [products, setProducts] = useState({})

  useEffect(() => {
    let newdate = date.toLocaleDateString().split('/').join('-')
    fetch('/api/posts/' + newdate)
      .then(response => response.json())
      .then(json => console.log(json))
  }, [date]);

  const handleChangeDate = date => {
    setDate(date)
  }

  const red = {
    backgroundColor: "Red"
  }

  return (
    <div>
      <Container style={red}>
        <Row>
          <Col sm={4} className="text-center">
            <DatePicker
              selected={date}
              onChange={handleChangeDate}
            />
          </Col>
          <Col sm={8} >
            <Product />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
