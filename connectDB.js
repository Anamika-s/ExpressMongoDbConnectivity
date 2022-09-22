import mongoose from "mongoose"

const connectDb =  async (DatabaseUrl) =>
{
  try{
 const dbOptions={
  dbName:process.env.DB_NAME
  };
 await mongoose.connect(DatabaseUrl, dbOptions);
 console.log("Connected succesfully")
  }
  catch(error)
  {
    console.log("Not connected")
    console.log(error)
  }
}
export default connectDb;