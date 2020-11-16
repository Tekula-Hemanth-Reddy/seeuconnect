import React from 'react';
import {Card} from 'react-bootstrap';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import './styles/styles.css';
import 'react-circular-progressbar/dist/styles.css';

function TeluguCard()
{
    return(
        <Card className="languageCard" style={{borderBottomColor:"#28a745"}}>
        <CircularProgressbar value={100} 
                             text='Telugu' 
                             strokeWidth={3} 
                             className="progressBar" 
                             styles={buildStyles({
                                textColor: "#28a745",
                                pathColor: "#28a745",
                              })}/>
        </Card>
    );
}

export default TeluguCard;