const express = require('express')
const cors = require('cors')
const postRoute = require('./routers/postRoute.js')
const deleteRoute = require('./routers/deleteRoute.js')
const getRoute = require('./routers/getRoute.js')
const dbConnection = require('./database/dbconn')


dbConnection()

const app = express()


app.use(cors());
app.use(express.json())
app.use('/api/v3/auth',express.static('uploads'))


app.use("/api/v1/auth",postRoute)
app.use("/api/v2/auth",deleteRoute)
app.use("/api/v3/auth",getRoute)

app.get("/", (req, res)=>{
    res.send("Hello")
})
const PORT = process.env.port || 4000;


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
