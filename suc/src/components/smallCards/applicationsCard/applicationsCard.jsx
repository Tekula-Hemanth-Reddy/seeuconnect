import React from 'react';
import {Card} from 'react-bootstrap';
import * as HIIcons from 'react-icons/fa';
import './applicationsStyles.css';

function ApplicationsCard()
{
    return(
        <Card className="mainACard">
        <HIIcons.FaMobileAlt className="cardAIcon"/>
        <Card.Title className="cardATitle">Applications</Card.Title>
        </Card>

    );
}

export default ApplicationsCard;