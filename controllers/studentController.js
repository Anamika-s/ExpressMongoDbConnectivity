// CRUD Opeartions on which Students Model
import express from "express";
import studetModel from "../models/student.js";
class StudentController
{
   static getAllStudents =  async  (req,res)=>
   {
    // console.log("getAllStudents")
    try{
      const result = await  studetModel.find();
      res.send(result);
  }
  catch(error)
  {
    res.send(error);
  }
   }

   static getStudentById = async (req,res)=>
   {
    try{
      const result =  await studetModel.findById(req.params.id);
      res.send(result);
    }
    catch(error)
    {
    res.send(error)
    }
   }

   static createStudent = async (req,res)=>
   {
    console.log("inside insert")
     try{
      // Destructuring 
      const {name, age , fees}  = req.body;
      const document = new studetModel(
        {
        name : name,
        age : age,
        fees:fees
        })
        console.log(document)
        const result = await document.save();
        res.status(201).send(result)
     }
     catch(error)
     {
      console.log(error)
     }
     
   }

   static editStudent =  async (req,res)=>
   {
     try{
   const result = await studetModel.findByIdAndUpdate(req.params.id, req.body);
   res.send(result)

     }
     catch(error)
     {
      console.log(error)
     }
   }
   static deleteStudent = async (req,res)=>
   {
    try{
      const result = await studetModel.findByIdAndDelete(req.params.id);
      res.send(result)
   
        }
        catch(error)
        {
         console.log(error)
        }
   }
}

export default StudentController;