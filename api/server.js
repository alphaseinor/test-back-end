require('dotenv').config()
const express = require("express")
const cors = require("cors")
const helmet = require("helmet");
const { response } = require('express');

const server = express();

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/', ()=>{
  console.log(`${process.env.NAME}'s Server listening on port ${PORT}`)
  res.staus(200).json({message: `${process.env.NAME}'s Server listening on port ${PORT}`})
})

module.exports = server