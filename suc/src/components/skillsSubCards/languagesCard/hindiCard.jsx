import React from 'react';
import {Card} from 'react-bootstrap';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import './styles/styles.css';
import 'react-circular-progressbar/dist/styles.css';

function HindiCard()
{
    return(
        <Card className="languageCard" style={{borderBottomColor:"#00c5fc"}}>
        <CircularProgressbar value={75} 
                             text='Hindi' 
                             strokeWidth={5} 
                             className="progressBar" 
                             styles={buildStyles({
                                textColor: "#00c5fc",
                                pathColor: "#00c5fc",
                              })}/>
        </Card>
    );
}

export default HindiCard;