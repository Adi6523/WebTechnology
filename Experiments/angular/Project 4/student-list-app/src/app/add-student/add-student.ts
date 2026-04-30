import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService, Student } from '../services/student';

@Component({
  selector: 'app-add-student',
  standalone: false,
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudent {
  newStudent: Student = {
    name: '',
    course: ''
  };

  constructor(private studentService: StudentService, private router: Router) {}

  addStudent() {
    if (this.newStudent.name && this.newStudent.course) {
      this.studentService.addStudent({ ...this.newStudent });
      this.router.navigate(['/students']);
    } else {
      alert('Please fill out both Name and Course');
    }
  }
}
