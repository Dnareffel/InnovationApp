const express = require('express'),
path = require('path'),

bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose'),
config = require('./config/DB'),
innovRoutes = require('./expressRoutes/innovRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
() => {console.log('Database is connected') },
err => { console.log('Can not connect to the database'+ err)}
);

const app = express();

app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.use('/innov', innovRoutes);

const server = app.listen(port, function(){
console.log('Listening on port ' + port);
});

app.use(express.static(path.join(__dirname,'dist')))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'))
})