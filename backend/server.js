const express =require("express")
const app = express()
const bodyParser =require("body-parser")
const path =require("path")
// const data = require('../src/data.json')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(cors())

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/CRM_DB", { useNewUrlParser: true })//Build the DB
const Schema = mongoose.Schema

const ClientSchema = new Schema ({
    name: String ,
    email: String ,
    firstContact: Date,
    emailType: String ,
    sold: Boolean ,
    owner: String,
    country: String
})

const Client = mongoose.model('client' , ClientSchema)

// Inserts the data into the DB
// data.map(d => { 
//     let newClient = new Client({name:d.name , email:d.email , firstContact: d.firstContact , emailType: d.emailType , sold: d.sold , owner : d.owner , country: d.country })
//     newClient.save()
// })



 app.get('/clients' , (req , res) => {
     Client.find({} , function(err , result){
         res.send(result)
    })
})

app.post('/actions' , (req ,res) => {
    // console.log(req.body)
    let client = new Client (req.body)
    client.save()
    res.end()
})

app.put('/update', function( req, res) {
    console.log(req.body)
    Client.findOneAndUpdate({ name: req.body.find }, {[req.body.key] : req.body.kind } , {new: true}, function(err, doc){console.log(doc)}
        )
   res.end()
 })

 app.put('/actions' , (req , res) => { // Declare Sale
    // console.log(req.body)
    Client.findOneAndUpdate({ name: req.body.name}, { sold : true} , {new: true}, function(err, doc){console.log(doc)}
        )
    res.end()
})


app.put('/clients' , (req , res) => {
    console.log(req.body)
    Client.findByIdAndUpdate(`${req.body.id}` , {name : req.body.name , country : req.body.country  } ,
         function(err, result){
                console.log(result)
            })
    res.end()
})

                                
// Shhh the server is listening
const port = 8080
app.listen(port , function(){
    console.log('The server is up and running on ' + port)
    }
)