const express = require ('express')
const app = express();
const port = 4000



  app.use(function (req, res, next) {
    let date= new Date()
    console.log(date)
    let day=date.getDay()
    console.log(day)
    let hour=date.getHours()
    console.log(hour)
    if ((day !== 0 && day !== 6 )&& (hour <= 17 && hour >= 9)) {
        next();
    } 
    
    else {
        res.send('<h1>Out of service Now<h1>')
    }

})
app.use(express.static("./public"))
app.get('/', function (req, res,next) {
    res.send('Welcome Home');
  });


app.listen(4000,(err)=>{
    err?console.log(err): console.log('server is runing')
})