import React from 'react';
import {Card} from 'react-bootstrap';
import * as HIIcons from 'react-icons/ai';
import './softwareStyles.css';

function SoftwareCard()
{
    return(
        <Card className="mainSCard">
        <HIIcons.AiOutlineDesktop className="cardSIcon"/>
        <Card.Title className="cardSTitle">Software</Card.Title>
        </Card>

    );
}

export default SoftwareCard;