const somethingWillhappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('hey!');
        } else {
            reject('Whooops!');
        }
    });
};

somethingWillhappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

    const somethingWillhappen2 = () =>{
        return new Promise((resolve, reject) => {
            if(true){
                setTimeout(() =>{
                    resolve('True');
                }, 2000)
            } else {
                const error = new Error('Whoooop');
                reject(error);
            }
        });
    };

    somethingWillhappen2()
        .then(response => console.log(response))
        .catch(err => console.error(err)); 


    Promise.all([somethingWillhappen(), somethingWillhappen2()])
        .then(response => {
            console.log('Array of results', response);
        })
        .catch(err => {
            console.error(err);
        })