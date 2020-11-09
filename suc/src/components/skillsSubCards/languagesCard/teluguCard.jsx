import React from 'react';
import {Card} from 'react-bootstrap';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import './styles/styles.css';
import 'react-circular-progressbar/dist/styles.css';

function TeluguCard()
{
    return(
        <Card className="languageCard" style={{borderBottomColor:"red"}}>
        <CircularProgressbar value={75} 
                             text='Telugu' 
                             strokeWidth={5} 
                             className="progressBar" 
                             styles={buildStyles({
                                textColor: "red",
                                pathColor: "red",
                              })}/>
        </Card>
    );
}

export default TeluguCard;