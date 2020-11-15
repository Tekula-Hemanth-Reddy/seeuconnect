import React, { Component} from 'react';
import {Spinner,Card,Container} from 'react-bootstrap';
import './loader.css'

const Loading =props => {
    return(
        <div style={{backgroundColor:"#000"}}>
            <Container className="loaderContainer" style={{height:"100vh"}}>
                <Card className="loaderCard">
                <Spinner animation="border" role="status">
                    <span className="sr-only" style={{color:"#61dafb"}}></span>
                </Spinner>
                </Card>
                <h1>Loading...</h1>
            </Container>
        </div>
    )
}

export default Loading;