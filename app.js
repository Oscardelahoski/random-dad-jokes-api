const express = require ('express');
const axios = require ('axios');
const { userRouter } = require('./src/routes/api.router')
const app = express();
const port = 4000;


// Body parser
app.use (express.json());

// Routers
app.use ('/api/v1/users', userRouter);


axios.get ('https://rapidapi.com/dad-jokes.p.rapidapi.com')
.then((result) => {
       console.log (result.data);
}).catch((err) => {
    console.log (err)
});



app.listen(port, ()=> {
    console.log (`Server listening on PORT ${port}`)
})