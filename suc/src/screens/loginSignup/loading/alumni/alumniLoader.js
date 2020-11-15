import React, { Component} from 'react';
import {Spinner,Card,Container} from 'react-bootstrap';
import history from '../../../../history/history';
import authContext from '../../../../context/auth-context';

const Loading =props => {
    return(
        <div>
            <authContext.Consumer>
                {(context)=>{
                    const requestBody = {
                        query: `
                        mutation{
                            CreateAlumni(userId:"${context.idUser}"){
                            name
                            personPhone
                            }
                        }
                        `
                    };
            
                    fetch('http://localhost:4000/graphql', {
                        method: 'POST',
                        body: JSON.stringify(requestBody),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(res => {
                        if(res.status!== 200 && res.status!== 201){
                            throw new Error('Failed!');
                        }
                        return res.json();
                    })
                    .then(resData => {
                        console.log(resData);
                        history.push('/home')
                    })
                    .catch(err => {
                        console.log(err);
                    });
                }}
            </authContext.Consumer>
        <Container>
            <Card>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
            Please Login ...
            </Card>
        </Container>
        </div>
    )
}

export default Loading;