const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const router = express.Router

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', )
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
        default:
            console.log('Error: current day is equal to ' + today);
    }
    // res.send(`<h1><i> ${today}</i></h1>`) //used back ticks because i couldnt use empty string and style at the same time.
    //Now if you wanna send multiple HTML encoded messages how would you do that? res.write
    // res.write(`<p>Yes it is ${today}!</p>`)
    // res.write('<h1>I can sleep in</h1>')
    // res.send();
    //Although this works, It isnt efficient.

    //efficient way, make EJS file and use res.render
    res.render('index', {theDay: today})
    


})


app.listen(3000, () => {
    console.log('Listening on port 3000')
})