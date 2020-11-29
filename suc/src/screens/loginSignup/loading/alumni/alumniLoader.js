import React from 'react';
import history from '../../../../history/history';
import authContext from '../../../../context/auth-context';
import Loader from '../../../../AlumniPart/Components/loader/loader';

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
                        history.push('/home')
                    })
                    .catch(err => {
                        console.log(err);
                    });
                }}
            </authContext.Consumer>
            <Loader />
        </div>
    )
}

export default Loading;