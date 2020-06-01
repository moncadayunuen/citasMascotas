import React, { Fragment, useState } from 'react';
import {Form, Col, Button, Alert} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const Formdate = ({createPetDate}) => {

    //Create state of dates
    const [petDate, updatePetDate] = useState({
        id: uuidv4(),
        pet: '',
        petOwner: '',
        date: '',
        hour: '',
        symptoms: ''
    });

    //create state of errors
    const [error, updateError] = useState(false);

    //function that exect when the user writes
    const handleState = e => {
        updatePetDate({
            ...petDate,
            [e.target.name]: e.target.value
        });
        //console.log(e.target.value);
    }

    //extract the values of inputs
    const {pet, petOwner, date, hour, symptoms} = petDate;

    //event sent by form
    const submitPetDate = (e) => {
        e.preventDefault();

        //console.log(pet);
        //validate
        if (pet.trim() === '' | petOwner.trim() === '' | date.trim() === '' | hour.trim() === '' | symptoms.trim() === '') {
            console.log('Hay un campo vacío');
            updateError(true);
            return;
        }

        //Delete preview message
        updateError(false);
        //get ID
        console.log(petDate);
        //create petdate
        createPetDate(petDate);
        //reset form
        updatePetDate({
            id: uuidv4(),
            pet: '',
            petOwner: '',
            date: '',
            hour: '',
            symptoms: ''
        });
        //console.log('Agregando...');
    }

    return (
        <Fragment>
            <h2 className="text-center">Crear Nueva Cita</h2>
            { error ? <Alert variant="danger">
                    <Alert.Heading>¡Error!</Alert.Heading>
                    <p>Hay un campo vacío</p>
                </Alert> : null }
            <Form
                onSubmit={submitPetDate}
            >
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Nombre mascota</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Nombre mascota"
                            name="pet"
                            value={pet}
                            onChange={handleState}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Label>Dueño</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Dueño"
                        name="petOwner"
                        value={petOwner}
                        onChange={handleState}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control 
                        type="date"
                        name="date"
                        value={date}
                        onChange={handleState}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Dueño</Form.Label>
                    <Form.Control 
                        type="time"
                        name="hour"
                        value={hour}
                        onChange={handleState}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Síntomas</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={5}
                        name="symptoms"
                        value={symptoms}
                        onChange={handleState}
                    />
                </Form.Group>
                <Button
                    type="submit"
                    variant="info"
                    className="btn-block"
                >Enviar</Button>
            </Form>
        </Fragment>
    );
}

export default Formdate;