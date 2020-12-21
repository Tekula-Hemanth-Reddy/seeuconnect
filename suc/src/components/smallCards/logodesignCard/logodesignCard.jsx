import React from 'react';
import {Card} from 'react-bootstrap';
import * as HIIcons from 'react-icons/fa';
import './logodesignStyles.css';

function LogodesignCard()
{
    return(
        <Card className="mainLCard" style={{paddingLeft:"2px",paddingRight:"2px"}}>
        <HIIcons.FaRegLightbulb className="cardLIcon"/>
        <Card.Title className="cardLTitle">Design Thinking</Card.Title>
        </Card>

    );
}

export default LogodesignCard;