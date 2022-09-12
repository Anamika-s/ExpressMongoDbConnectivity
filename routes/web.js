import express  from "express"
const webrouter = express.Router();

import StudentController from "../controllers/studentController.js";

webrouter.get("/students", StudentController.getAllStudents);
webrouter.get("/student/:id", StudentController.getStudentById)
webrouter.post("/student/create", StudentController.createStudent);
webrouter.put("/student/edit/:id", StudentController.editStudent);
webrouter.delete("/student/delete/:id", StudentController.deleteStudent)

export default webrouter;