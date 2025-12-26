import express, { response } from "express";
import "dotenv/config";


const app = express()
app.use(express.json());

//Dummy data for the file.
const students = [
  { id: 1, first: "James", middle: "Arthur", last: "Bennett", email: "j.bennett@example.com", gender: "MALE", dob: "1998-05-14", course: "Computer Science" },
  { id: 2, first: "Elena", middle: "Marie", last: "Rodriguez", email: "elena.rod@example.com", gender: "FEMALE", dob: "2000-11-22", course: "Biomedical Engineering" },
  { id: 3, first: "Marcus", middle: "Lee", last: "Chen", email: "m.chen@example.com", gender: "MALE", dob: "1999-01-30", course: "Digital Marketing" },
  { id: 4, first: "Sarah", middle: "Jane", last: "Smith", email: "sara.j@example.com", gender: "FEMALE", dob: "2001-03-12", course: "Psychology" },
  { id: 5, first: "Robert", middle: "Paul", last: "Taylor", email: "rob.taylor@example.com", gender: "MALE", dob: "1997-08-19", course: "Civil Engineering" },
  { id: 6, first: "Aisha", middle: "Fatima", last: "Khan", email: "a.khan@example.com", gender: "FEMALE", dob: "2002-07-05", course: "Economics" },
  { id: 7, first: "David", middle: "William", last: "O'Connor", email: "david.oc@example.com", gender: "MALE", dob: "1996-12-01", course: "Philosophy" },
  { id: 8, first: "Chloe", middle: "Grace", last: "Wilson", email: "chloe.w@example.com", gender: "FEMALE", dob: "2000-04-15", course: "Graphic Design" },
  { id: 9, first: "Samuel", middle: "Thomas", last: "Anderson", email: "sam.anderson@example.com", gender: "MALE", dob: "1999-09-27", course: "Mechanical Engineering" },
  { id: 10, first: "Isabella", middle: "Rose", last: "Garcia", email: "isabella.g@example.com", gender: "FEMALE", dob: "2001-10-10", course: "Nursing" },
  { id: 11, first: "Kevin", middle: "Michael", last: "Murphy", email: "kmurphy@example.com", gender: "MALE", dob: "1998-02-14", course: "Political Science" },
  { id: 12, first: "Sophia", middle: "Louise", last: "Brown", email: "sophia.b@example.com", gender: "FEMALE", dob: "2000-06-23", course: "Architecture" },
  { id: 13, first: "Daniel", middle: "Edward", last: "Jones", email: "dan.jones@example.com", gender: "MALE", dob: "1997-11-08", course: "Data Science" },
  { id: 14, first: "Amelia", middle: "Claire", last: "Davis", email: "amelia.d@example.com", gender: "FEMALE", dob: "2002-01-17", course: "Journalism" },
  { id: 15, first: "Jackson", middle: "Scott", last: "White", email: "j.white@example.com", gender: "MALE", dob: "1999-03-31", course: "Business Administration" },
  { id: 16, first: "Mia", middle: "Alexandra", last: "Martinez", email: "mia.m@example.com", gender: "FEMALE", dob: "2001-08-14", course: "Sociology" },
  { id: 17, first: "Lucas", middle: "Ryan", last: "Thompson", email: "l.thompson@example.com", gender: "MALE", dob: "1998-12-25", course: "Cyber Security" },
  { id: 18, first: "Charlotte", middle: "Anne", last: "Harris", email: "char.harris@example.com", gender: "FEMALE", dob: "2000-02-09", course: "Environmental Science" },
  { id: 19, first: "Benjamin", middle: "Oliver", last: "Clark", email: "ben.clark@example.com", gender: "MALE", dob: "1996-05-18", course: "Mathematics" },
  { id: 20, first: "Harper", middle: "Elizabeth", last: "Lewis", email: "h.lewis@example.com", gender: "FEMALE", dob: "2002-09-03", course: "Accounting" },
  { id: 21, first: "William", middle: "Alexander", last: "Walker", email: "will.walker@example.com", gender: "MALE", dob: "1997-07-20", course: "History" },
  { id: 22, first: "Evelyn", middle: "Faith", last: "Hall", email: "e.hall@example.com", gender: "FEMALE", dob: "2001-11-12", course: "Education" },
  { id: 23, first: "Henry", middle: "Charles", last: "Young", email: "h.young@example.com", gender: "MALE", dob: "1999-06-07", course: "Physics" },
  { id: 24, first: "Abigail", middle: "Joy", last: "Allen", email: "abby.allen@example.com", gender: "FEMALE", dob: "2000-08-30", course: "Chemistry" },
  { id: 25, first: "Sebastian", middle: "Cole", last: "King", email: "s.king@example.com", gender: "MALE", dob: "1998-04-11", course: "Software Engineering" },
  { id: 26, first: "Emily", middle: "Victoria", last: "Wright", email: "emily.w@example.com", gender: "FEMALE", dob: "2001-12-05", course: "Fine Arts" },
  { id: 27, first: "Matthew", middle: "Luke", last: "Lopez", email: "m.lopez@example.com", gender: "MALE", dob: "1997-10-24", course: "Finance" },
  { id: 28, first: "Luna", middle: "Hope", last: "Hill", email: "luna.hill@example.com", gender: "FEMALE", dob: "2002-03-19", course: "Marine Biology" },
  { id: 29, first: "Julian", middle: "Xavier", last: "Scott", email: "j.scott@example.com", gender: "MALE", dob: "1999-01-08", course: "Criminology" },
  { id: 30, first: "Sofia", middle: "Isabel", last: "Adams", email: "s.adams@example.com", gender: "FEMALE", dob: "2000-05-27", course: "Law" }
];


/* ====================== Middleware START ====================== */



/* ====================== Middleware END ====================== */

/* =========================START=========================
 HTTP Request Practice for 
GET, 
POST, 
PUT, 
PATCH,
DELETE 
*/

app.get("/", async (request, response) =>{
    return response.status(200).send(students);
});

//Selection of a specific entity
app.get("/api/student/:id", (request, response) =>{
    const parsedID = parseInt(request.params.id);
    if(isNaN(parsedID)) return response.status(400).send({msg: "Number is not a NAN"});

    const person = students.find((user)=>user.id === parsedID);
    if(!person) return response.sendStatus(500);

    return response.send(person);
});

//This is how we handle the query portion of the get HTTP request
app.get("/api/student", (request, response) =>{
    console.log(request.query);

    const {
        query: {filter, value},
    } = request;
    
    if(filter && value) {
        const stud = students.filter((user) =>{
            return user[filter].toLowerCase().includes(value.toLowerCase())
        });
        return response.send(stud);
    }

    return response.send(students);
});



app.post("/api/post", (request, response)=>{
    const {body} = request;
    const newUser = {id: students[students.length -1].id +1, ...body};
    students.push(newUser);
    return response.status(201).send(newUser);
})


//Grabs the values of data body

//Post, Adds new data to the list
app.post('/api/student', (req, resp)=>{
    const {body} = req;

    const lastID = students[students.length -1].id+1;
    const newStudent = {id: lastID, ...body};
    students.push(newStudent);
    console.log(newStudent);
    return resp.status(201).send(newStudent);

});

//Patch, updates partial areas within the an existing thing

app.patch("/api/student/:id", (request, response)=>{
    //First to get the updates we have to find the index of the object within the array
    //we do this by acquiring the id which we can use to find the index.

    const {body} = request;

    const parsedID = parseInt(request.params.id);
    if(isNaN(parsedID)) return response.status(400).send({msg: "id is not a number"});

    const studentIndex = students.findIndex((stud) => stud.id === parsedID);
    if(studentIndex === -1){
        return response.status(404).send({msg: "Student is not found"});
    }
    console.log(studentIndex);

    students[studentIndex] = {...students[studentIndex], ...body};

    return response.status(201).send(students[studentIndex]);
});

app.put('/api/student/:id', (request, response)=>{
    const {body, params: {id}} = request;
    const parsedID = parseInt(id);
    if(isNaN(parsedID)) return response.status(400).send({msg: "Id is not a number"});

    const studIndex = students.findIndex((user)=> user.id === parsedID);
    if(studIndex === -1) return response.status(400).send({msg: "Index of student not found"});

    students[studIndex] = {id: parsedID, ...body};

    return response.status(201).send(students[studIndex]);
});


app.delete('/api/student/:id', (request, response)=>{
    const parsedID = parseInt(request.params.id);
    if(isNaN(parsedID)) return response.status(401).send({msg: "id is not a number"});

    const studIndex = students.findIndex((user)=>{
        return user.id === parsedID;
    })

    if(studIndex === -1) return response.status(404).send({msg: "Student not found"});

    students.splice(studIndex, 1);

    /* const person = students.find((user)=>{
        return user.id === parsedID;
    }); */
    console.log(studIndex);


})
/* =========================END========================= */


















//It is a great practice to keep the port info in a constant var and 
// grab it from an evn {install npm i dotenv}
const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Port ${PORT} is running`);
})