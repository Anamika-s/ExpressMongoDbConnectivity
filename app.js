import express from "express"
import connectDb from "./connectDB.js"
import webrouter from "./routes/web.js"
import dotenv from "dotenv"

dotenv.config();

var app  = express();

var port = process.env.PORT;
app.use(express.json())
app.use("/api", webrouter)
var databaseUrl = process.env.MONGODB_URL;
connectDb(databaseUrl)

app.listen(port , ()=>
{
   console.log(`Server is listening at ${port}`)
})

