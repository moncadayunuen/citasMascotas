import React, { Fragment, useState, useEffect } from 'react';
import Formdate from './Formdate';
import Date from './Date';

import '../css/App.css';
import {Container, Row, Col} from 'react-bootstrap';

function App() {

  let startPetDates = JSON.parse(localStorage.getItem('petDates'));
  if (!startPetDates) {
    startPetDates = [];
  }

  //array state of petdates
  const [petDates, savePetDates] = useState([startPetDates]);

  useEffect( () => {
    if (startPetDates) {
      localStorage.setItem('petDates', JSON.stringify(petDates))
    } else {
      localStorage.setItem('petDates', JSON.stringify([]));
    }
  }, [petDates, startPetDates]);

  //Function that takes actual dates and add a new date
  const createPetDate = petDate => {
    console.log(petDate);
    savePetDates([
      ...petDates,
      petDate
    ]);
  }

  const deletePetDate = id => {
    const newPetDates = petDates.filter(petDate => petDate.id !== id);
    savePetDates(newPetDates);  
  }

  return (
    <Fragment>
      <h1 className="text-center text-info text-uppercase py-5">Administrador de Pacientes</h1>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Formdate
              createPetDate={createPetDate}
            />
          </Col>
          <Col xs={12} md={6}>
            <h2 className="text-center">Citas Registradas</h2>
            {petDates.map(petDate => (
              <Date
                key={petDate.id}
                petDate={petDate}
                deletePetDate = {deletePetDate}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
