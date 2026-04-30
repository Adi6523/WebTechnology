import { Component, OnInit } from '@angular/core';
import { StudentService, Student, ApiUser } from '../services/student';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students implements OnInit {
  students: Student[] = [];
  apiUsers: ApiUser[] = [];
  loadingUsers = false;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  loadUsers() {
    this.loadingUsers = true;
    this.studentService.getApiUsers().subscribe({
      next: (users) => {
        this.apiUsers = users;
        this.loadingUsers = false;
      },
      error: (err) => {
        console.error('Failed to load users', err);
        this.loadingUsers = false;
      }
    });
  }
}
