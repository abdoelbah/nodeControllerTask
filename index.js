const express = require('express');
const router = require('./router/router');
const cors = require('cors');
const {validation} = require('./middleware/check');

const app = express();

app.use(cors())
app.use(express.urlencoded({extended : true}))

app.use(validation);
app.use(router)
app.listen(3000 , () => {
    console.log("listening on port 3000 🚀 ")
} );
