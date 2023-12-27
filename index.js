const express = require('express');
const router = require('./router/router');
const cors = require('cors');
const {checkName} = require('./middleware/check');

const app = express();

app.use(cors())
app.use(express.urlencoded({extended : true}))

app.use(checkName);
app.use(router)
app.listen(3000 , () => {
    console.log("listening on port 3000 🚀 ")
} );
