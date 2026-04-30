import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly STORAGE_KEY = 'studentsData';
  private studentsSubject = new BehaviorSubject<Student[]>([]);
  public students$ = this.studentsSubject.asObservable();

  constructor() {
    this.loadFromLocalStorage();
  }

  private loadFromLocalStorage(): void {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (data) {
      try {
        const parsed = JSON.parse(data);
        this.studentsSubject.next(parsed);
      } catch (e) {
        console.error('Error parsing local storage data', e);
        this.studentsSubject.next([]);
      }
    } else {
      // Initialize with dummy data if empty to show something initially (optional but good for viva demo)
      const initialData: Student[] = [
        { id: this.generateId(), name: 'John Doe', age: 20, course: 'Computer Science', marks: 85 },
        { id: this.generateId(), name: 'Jane Smith', age: 22, course: 'Information Technology', marks: 92 }
      ];
      this.saveToLocalStorage(initialData);
    }
  }

  private saveToLocalStorage(students: Student[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(students));
    this.studentsSubject.next(students);
  }

  getStudents(): Observable<Student[]> {
    return this.students$;
  }

  getStudentById(id: string): Student | undefined {
    const currentStudents = this.studentsSubject.getValue();
    return currentStudents.find(s => s.id === id);
  }

  addStudent(student: Omit<Student, 'id'>): void {
    const currentStudents = this.studentsSubject.getValue();
    const newStudent: Student = {
      ...student,
      id: this.generateId()
    };
    this.saveToLocalStorage([...currentStudents, newStudent]);
  }

  updateStudent(updatedStudent: Student): void {
    const currentStudents = this.studentsSubject.getValue();
    const index = currentStudents.findIndex(s => s.id === updatedStudent.id);
    if (index !== -1) {
      currentStudents[index] = updatedStudent;
      this.saveToLocalStorage([...currentStudents]);
    }
  }

  deleteStudent(id: string): void {
    const currentStudents = this.studentsSubject.getValue();
    const filtered = currentStudents.filter(s => s.id !== id);
    this.saveToLocalStorage(filtered);
  }

  getTotalStudents(): number {
    return this.studentsSubject.getValue().length;
  }

  getAverageMarks(): number {
    const currentStudents = this.studentsSubject.getValue();
    if (currentStudents.length === 0) return 0;
    const totalMarks = currentStudents.reduce((sum, s) => sum + s.marks, 0);
    return Math.round(totalMarks / currentStudents.length);
  }

  getTopStudent(): Student | null {
    const currentStudents = this.studentsSubject.getValue();
    if (currentStudents.length === 0) return null;
    return currentStudents.reduce((prev, current) => (prev.marks > current.marks) ? prev : current);
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }
}
