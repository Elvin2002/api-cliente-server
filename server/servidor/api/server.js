import express from 'express'
import dotenv from 'dotenv/config'
//import server from '../api/src/config/server'
const port = process.env.SERVER_PORT || 8080

//config
const app = express();
const path = "/"


// databases class 
//const Open_server = new server();
//Open_server.Server_run().query()


// middleware





//ruts

app.get(path , (req , res) =>{
    res.send('path /' ,)
})


app.listen(port , ()=>{
    console.info('server run' , port)
})
