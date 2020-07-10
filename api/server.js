require('dotenv').config()
const express = require("express")
const cors = require("cors")
const helmet = require("helmet");
const { response } = require('express');

const server = express();

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/secret/', (req, res)=>{
  res.status(200).json({secret: `${process.env.SUPERSECRETKEY}`})
})


server.use('/', (req, res)=>{
  console.log(`${process.env.NAME}'s Server listening on port ${process.env.PORT}`)
  res.status(200).json({message: `${process.env.NAME}'s Server listening on port ${process.env.PORT}`})
})


module.exports = server