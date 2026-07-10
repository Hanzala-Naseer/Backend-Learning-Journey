const http = require("http");

const fs=require("fs");

const path=require("path");

const students= require("./data/students.js");

const homepath=path.join(__dirname,"pages","index.html");
const aboutpath=path.join(__dirname,"pages","about.html");
const studentspath=path.join(__dirname,"pages","students.html");



function readFile(filePath,{req,res}){
    return fs.readFile(filePath,(err,data)=>{
            if(err){
                res.statusCode=500;
               return res.end("Failed to load page");
            }
            res.setHeader("Content-Type","text/html");
            res.end(data);
        })
}

function generate3DigitId(array) {
    const usedIds = new Set(array.map(obj => obj.id));
    if (usedIds.size >= 900) {
        throw new Error("All possible 3-digit IDs are taken!");
    }
    let newId;
    do {
        newId = Math.floor(100 + Math.random() * 900);
    } while (usedIds.has(newId));
    return newId;
}


function validateStudent(student) {
    if (!student.name) {
        return { valid: false, message: "Name required" };
    }

    if (student.age === undefined) {
        return { valid: false, message: "Age required" };
    }

    if (!student.department) {
        return { valid: false, message: "Department required" };
    }

    if (student.semester === undefined) {
        return { valid: false, message: "Semester required" };
    }

    if (student.cgpa === undefined) {
        return { valid: false, message: "CGPA required" };
    }

    if (typeof student.name !== "string") {
        return { valid: false, message: "Name must be a string" };
    }

    if (typeof student.age !== "number" || student.age<=0) {
        return { valid: false, message: "Age must be a positive integer" };
    }

    if (typeof student.department !== "string") {
        return { valid: false, message: "Department must be a string" };
    }

    if (typeof student.semester !== "number") {
        return { valid: false, message: "Semester must be a number" };
    }

    if (typeof student.cgpa !== "number") {
        return { valid: false, message: "CGPA must be a number" };
    }

    if (student.semester < 1 || student.semester > 8) {
        return { valid: false, message: "Semester must be between 1 and 8" };
    }

    if (student.cgpa < 0 || student.cgpa > 4) {
        return { valid: false, message: "CGPA must be between 0 and 4" };
    }

    return { valid: true };
}
const server= http.createServer((req,res)=>{
    if(req.url==="/" && req.method==="GET"){
        readFile(homepath,({req,res}));
        
    } else if(req.url==="/about" && req.method==="GET"){
        readFile(aboutpath,({req,res}));
        
    }else if(req.url==="/students" && req.method==="GET"){
        readFile(studentspath,({req,res}));
        
    } else if(req.url==="/api/students" && req.method==="GET"){
        res.setHeader("Content-Type","application/json");
        res.statusCode=200;
        res.end(JSON.stringify(students));

    }else if (req.method === "GET" && req.url.startsWith("/api/students/")) {

    const parts = req.url.split("/");
    console.log(parts);

    const id = Number(parts[3]);

    const student = students.find(student=>student.id==id);

    res.setHeader("Content-Type", "application/json");

    if (!student) {
        res.statusCode = 404;
        return res.end(JSON.stringify({
            message: "Student not found"
        }));
    }

    res.statusCode = 200;
    res.end(JSON.stringify(student));
}else if(req.url==="/api/students" && req.method==="POST"){
    let chunks=[];
    req.on("data",(chunk)=>{
        chunks.push(chunk);

    })

    req.on("end", () => {
        res.setHeader("Content-Type", "application/json");
        
        if (chunks.length === 0) {
            res.statusCode = 400;
            return res.end(JSON.stringify({ message: "Body required" }));
        }

        let body = Buffer.concat(chunks);
        let data = body.toString().trim();

        if (!data) {
            res.statusCode = 400;
            return res.end(JSON.stringify({ message: "Body required" }));
        }

        try {
            let newStudent = JSON.parse(data);

            const validation = validateStudent(newStudent);

            if (!validation.valid) {
                res.statusCode = 400;
                return res.end(JSON.stringify({
                    message: validation.message
                }));
            }

            let newId = generate3DigitId(students);

            newStudent.id = newId;
            students.push(newStudent);

            res.statusCode = 201;
            res.end(JSON.stringify({
                message: "Student created successfully",
                data: newStudent
            }));
        } catch (error) {
            res.statusCode = 400;
            res.end(JSON.stringify({ message: "Invalid JSON format sent" }));
        }
    });

    }

    else if (req.method === "PUT" && req.url.startsWith("/api/students/")) {

    const id = Number(req.url.split("/")[3]);

    const index = students.findIndex(student => student.id === id);

    res.setHeader("Content-Type", "application/json");

    if (index === -1) {
        res.statusCode = 404;
        return res.end(JSON.stringify({
            message: "Student not found"
        }));
    }

    let chunks = [];

    req.on("data", chunk => {
        chunks.push(chunk);
    });

    req.on("end", () => {

        if (chunks.length === 0) {
            res.statusCode = 400;
            return res.end(JSON.stringify({
                message: "Body required"
            }));
        }

        try {

            const body = Buffer.concat(chunks).toString().trim();

            const updatedStudent = JSON.parse(body);

            const validation = validateStudent(updatedStudent);

            if (!validation.valid) {
                res.statusCode = 400;
                return res.end(JSON.stringify({
                    message: validation.message
                }));
            }

            updatedStudent.id = id;

            students[index] = updatedStudent;

            res.statusCode = 200;

            res.end(JSON.stringify({
                message: "Student updated successfully",
                data: updatedStudent
            }));

        } catch {

            res.statusCode = 400;

            res.end(JSON.stringify({
                message: "Invalid JSON format sent"
            }));

        }

    });

}
else if (req.method === "DELETE" && req.url.startsWith("/api/students/")) {

    const id = Number(req.url.split("/")[3]);

    const index = students.findIndex(student => student.id === id);

    res.setHeader("Content-Type", "application/json");

    if (index === -1) {
        res.statusCode = 404;
        return res.end(JSON.stringify({
            message: "Student not found"
        }));
    }

    const deletedStudent = students.splice(index, 1)[0];

    res.statusCode = 200;

    res.end(JSON.stringify({
        message: "Student deleted successfully",
        data: deletedStudent
    }));

}

else{
        res.statusCode=404;
        res.end("Oops ! It looks You lost your Way 404")
    }
})

server.listen("3000",()=>{
    console.log("server started");
})