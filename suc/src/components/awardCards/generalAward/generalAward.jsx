import React from 'react';
import {Card} from 'react-bootstrap';
import './styles/styles.css';

function GeneralAward()
{
    return(
        <Card className="generalAwardCardMain">
            <Card.Title className="gCardTitle">01</Card.Title> 
            <Card.Subtitle className="gCardSubTitle">The CSS Award</Card.Subtitle>
            <Card.Text>
                <p className="gCardText">Proin gravida nibh vel velit quet. Aenean sollicitudin, lorem quis bibendum.</p>
            </Card.Text>
        </Card>
    );
}

export default GeneralAward;