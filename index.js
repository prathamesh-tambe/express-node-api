import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

// bodyParser
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

routes(app);

// to serve static files
app.use(express.static('public')); // public is the folder name which we have to allow to serve static files

app.get("/",(req,res) => 
    res.send(`Node and Express server running on posr ${PORT}`)
);

app.listen(PORT,() => 
    console.log(`yOUR SERVER IS RUNNING ON ${PORT}`)
);