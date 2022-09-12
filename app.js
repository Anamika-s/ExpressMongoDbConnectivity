import express from "express"
import connectDb from "./connectDB.js"
import webrouter from "./routes/web.js"
var app  = express();

var port = 3000;
app.use(express.json())
app.use("/api", webrouter)
var databaseUrl = "mongodb://localhost:27017";
connectDb(databaseUrl)

app.listen(port , ()=>
{
   console.log(`Server is listening at ${port}`)
})

