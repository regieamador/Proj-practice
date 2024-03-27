const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err.message);
        return
    }
    const first = result

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err.message);
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `Result: ${first}, ${second}`,
        (err, result) => {
            if(err){
                console.log(err);
                return
            }
            console.log("Success!!!");
        })
    })
})