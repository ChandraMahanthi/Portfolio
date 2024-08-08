var express = require("express")
const { MongoClient } = require('mongodb');//class
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);//instance


var fs = require("fs")
   var route= express()

   route.get("/senddata",function(req,res){
       
    client.connect().then((res)=>{ //server
        console.log("connected to mongo server")
       var dbRef =   client.db("")//database
      var collectionRef=  dbRef.collection("")//collection
           collectionRef.insertOne(userdata).then().catch()
    }).catch((error)=>{
        console.log("error")
    })

// res.send("<h2>hello</h2>")
   })// http://localhost:6767/senddata

   route.listen(6767,function(){
    console.log("server started")
   })