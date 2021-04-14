// Setup empty JS object to act as endpoint for all routes
 let projectData = {};

// Require Express to run server and routes
const express= require('express');
// Start up an instance of app;
const  app =express();

const bodyParser=require('body-parser');



/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors=require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port=4000;
app.listen(port,()=>{console.log(`server is running and listening to port ${port}`);});

//get data
app.get(`/getData`,(req,res)=>{res.send(projectData)});

//post data
app.post('/addData',(req,res)=>{
   const newObject={
      temperature:req.body.temp,
      date:req.body.date,
      feelings:req.body.feelings
  }
  projectData=newObject;
  res.send(projectData);

});





