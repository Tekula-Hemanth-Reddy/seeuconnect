import React from 'react';
import {Card} from 'react-bootstrap';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import './styles/styles.css';
import 'react-circular-progressbar/dist/styles.css';

function EnglishCard()
{
    return(
        <Card className="languageCard" style={{borderBottomColor:"yellow"}}>
        <CircularProgressbar value={80} 
                             text='English' 
                             strokeWidth={5} 
                             className="progressBar" 
                             styles={buildStyles({
                                textColor: "yellow",
                                pathColor: "yellow",
                              })}/>
        </Card>
    );
}

export default EnglishCard;