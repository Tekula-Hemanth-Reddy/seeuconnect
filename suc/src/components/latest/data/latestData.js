    let listData;
    const requestBody = {
        query: `
        query{
            latest{
            _id
            title
            description
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
            console.log({...resData.data.latest});
            listData=resData.data.latest;
        })
        .catch(err => {
            console.log(err);
        });

export default listData;
