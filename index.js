const express = require ('express')
const app = express();
const port = 4000
// app.get("/",(req,res)=>{
//     res.send("home");
// })
app.use(express.static("public"))
app.listen(4000,(err)=>{
    err?console.log(err): console.log('server is runing')
})