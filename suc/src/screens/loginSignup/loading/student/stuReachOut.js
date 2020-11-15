import React from 'react';
import {Spinner,Card,Container} from 'react-bootstrap';
import history from '../../../../history/history';
import authContext from '../../../../context/auth-context';
import Loading from '../../../../AlumniPart/Components/loader/loader';

const StuReachOut =props => {
    return(
        <div>
            <authContext.Consumer>
                {(context)=>{
                    const requestBody = {
                        query: `
                        mutation{
                            CreateReachOut(userId:"${context.idUser}"){
                            _id
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
                        history.push('/stueduloading')
                    })
                    .catch(err => {
                        console.log(err);
                    });
                }}
            </authContext.Consumer>
            <Loading />
        </div>
    )
}

export default StuReachOut;