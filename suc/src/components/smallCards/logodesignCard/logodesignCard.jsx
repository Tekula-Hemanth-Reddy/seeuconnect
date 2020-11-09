import React from 'react';
import {Card} from 'react-bootstrap';
import * as HIIcons from 'react-icons/fa';
import './logodesignStyles.css';

function LogodesignCard()
{
    return(
        <Card className="mainLCard">
        <HIIcons.FaRegLightbulb className="cardLIcon"/>
        <Card.Title className="cardLTitle">LogoDesign</Card.Title>
        </Card>

    );
}

export default LogodesignCard;