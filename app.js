const port = 1337;
const express = require('express');
const app = express();
const es6Renderer = require('express-es6-template-engine');

app.engine('html',es6Renderer);
app.set('views','views');
app.set('view engine', 'html');

const musicRouter = require('./routes/music');

app.use('/music', musicRouter)

app.listen(port,()=>{
    console.log(`listening on port: ${port}`)
})

