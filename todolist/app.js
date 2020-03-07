const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const router = express.Router

app.get('/', (req, res) => {
    // res.sendFile(__dirname, '/index.html')
    var today = new Date();
    // res.send("" + today.getDate()) //This gives number only.

    //to get what the day actually is: 
    today = today.getDate()

    switch(today){
        case 1:
            today = 'Sunday'
            break;
        case 2:
            today = 'Monday'
            break;
        case 3:
            today = 'Tuesday'
            break;
        case 4:
            today = 'Wednesday'
            break;
        case 5:
            today = 'Thursday'
            break;
        case 6:
            today = 'Friday'
            break;
        case 7:
            today = 'Saturday'
            break;
    }
    res.send(`<h1> ${today}</h1>`) //used back ticks because i couldnt use empty string and style at the same time.
})


app.listen(3000, () => {
    console.log('Listening on port 3000')
})