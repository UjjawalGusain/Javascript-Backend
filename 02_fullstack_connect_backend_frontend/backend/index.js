// Module js code. To run this, change the type in package.json
// to module
import express from 'express'

// Common js code. To run this, change the type in package.json
// to commonjs
// const express = require('express')

// Creating an express app to get and listen to the server
const app = express()

// Sending a GET request to the server
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            content: "This is joke 1"
        },
        {
            id: 2,
            content: "This is joke 2"
        },
        {
            id: 3,
            content: "This is joke 3"
        },
        {
            id: 4,
            content: "This is joke 4"
        },
        {
            id: 5,
            content: "This is joke 5"
        }
    ]

    res.send(jokes);
})

// Find the port number for .env file, or if not found
// use the port 3000
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})