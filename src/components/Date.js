import React, {Fragment} from 'react';
import '../css/styles.css';
import {Button} from 'react-bootstrap';

const Date = ({petDate, deletePetDate}) => (
    <Fragment>
        <div className="pet-date">
            <p>Mascota: <span>{petDate.pet}</span></p>
            <p>Dueño: <span>{petDate.petOwner}</span></p>
            <p>Hora: <span>{petDate.hour}</span></p>
            <p>Fecha: <span>{petDate.date}</span></p>
            <p>Síntomas: <span>{petDate.symptoms}</span></p>
            <Button
                className = "btn-block"
                key = {petDate.id}
                variant = "danger"
                onClick = {() => deletePetDate(petDate.id)}
            >Eliminar &times;</Button>
        </div>
    </Fragment>
)

export default Date;