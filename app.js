const express=require('express');
var {mongoose}=require('./mongoose_db')
var {IctUsers}=require('./userModel')
const bodyParser=require('body-parser')

var app=express();
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200' );

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/insert',(req,res)=>{

    console.log(req.body);
    var users = new IctUsers(
        {
            name:req.body.name,
            rollno:req.body.rollno,
            admno:req.body.admno,
            college:req.body.college,

        });


        users.save().then((doc)=>{        
            res.send(doc);
        },(error)=>{
            res.status(400).send(error);
        })

});

app.get('/users',(req,res)=>{
    IctUsers.find().then( (userdata) =>
    {
        res.send(userdata)

    })
})

 

app.listen(3000)