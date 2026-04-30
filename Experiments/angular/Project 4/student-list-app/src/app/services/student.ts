import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Student {
  name: string;
  course: string;
}

export interface ApiUser {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [];

  constructor(private http: HttpClient) {}

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student) {
    this.students.push(student);
  }

  getApiUsers(): Observable<ApiUser[]> {
    return this.http.get<ApiUser[]>('https://jsonplaceholder.typicode.com/users');
  }
}
