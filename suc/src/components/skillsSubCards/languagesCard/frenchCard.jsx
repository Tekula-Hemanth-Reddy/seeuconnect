import React from 'react';
import {Card} from 'react-bootstrap';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import './styles/styles.css';
import 'react-circular-progressbar/dist/styles.css';

function FrenchCard()
{
    return(
        <Card className="languageCard" style={{borderBottomColor:"orange"}}>
        <CircularProgressbar value={75} 
                             text='French' 
                             strokeWidth={5} 
                             className="progressBar" 
                             styles={buildStyles({
                                textColor: "orange",
                                pathColor: "orange",
                              })}/>
        </Card>
    );
}

export default FrenchCard;