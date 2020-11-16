import React from 'react';
import {Card} from 'react-bootstrap';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import './styles/styles.css';
import 'react-circular-progressbar/dist/styles.css';

function EnglishCard()
{
    return(
        <Card className="languageCard" style={{borderBottomColor:"#6f42c1"}}>
        <CircularProgressbar value={100} 
                             text='English' 
                             strokeWidth={3} 
                             className="progressBar" 
                             styles={buildStyles({
                                textColor: "#6f42c1",
                                pathColor: "#6f42c1",
                              })}/>
        </Card>
    );
}

export default EnglishCard;