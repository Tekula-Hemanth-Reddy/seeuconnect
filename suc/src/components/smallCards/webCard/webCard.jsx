import React from 'react';
import {Card} from 'react-bootstrap';
import * as HIIcons from 'react-icons/fa';
import './webStyles.css';

function WebCard()
{
    return(
        <Card className="mainWCard">
        <HIIcons.FaGlobeAmericas className="cardWIcon"/>
        <Card.Title className="cardWTitle">WebSite</Card.Title>
        </Card>

    );
}

export default WebCard;