import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentData {
  studentList:any[] = [
    {name:"Aditya Patil",age:22,course:"AIML"},
    {name:"Piyush Patil",age:21,course:"AIML"},
    {name:"Prajwal Patil",age:22,course:"AIML"},
    {name:"Siddhant Redekar",age:22,course:"AIML"},
    {name:"Paryusha Nandre",age:23,course:"AIML"},
  ]
  getStudentList()
  {
    return this.studentList
  }
}
