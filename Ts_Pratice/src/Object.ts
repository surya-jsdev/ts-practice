// Interface 
interface Employee{
   readonly id:number;
    Name:string;
    email?:string;
    department:string;
     
}
interface Manager extends Employee{
    teamSize:number;
}

const  manager:Manager = {
  id: 1,
  Name: "Ravi",
  email:"surya@gmail.com",
  department: "IT",
  teamSize:50,
  
};
console.log(manager)

// Type
type Student={
    StudentId:number;
    Studentname:string;
    Standard:number;
    Status:"Active" | "InActive";

}
const StudentDetails:Student={
    StudentId:101,
    Studentname:"HARI",
    Standard:12,
    Status:"Active"
}
console.log(StudentDetails);


