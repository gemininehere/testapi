// FileName: index.js
// Import express
const { urlencoded } = require('express');
let express = require('express')
let mongoose=require('mongoose')



// Initialize the app
let app = express();

module.exports=app



// Setup server port
var port = process.env.PORT || 3000;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

let mongoDb="mongodb://localhost/test"
mongoose.connect(mongoDb,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>console.log('connected'))




let apiRoutes = require("./api-routes")
// Use Api routes in the App
app.use('/api', apiRoutes)


app.use('/api/user', apiRoutes)



// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});

