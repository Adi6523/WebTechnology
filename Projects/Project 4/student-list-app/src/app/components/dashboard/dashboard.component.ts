import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  totalStudents: number = 0;
  averageMarks: number = 0;
  topStudent: Student | null = null;
  private sub!: Subscription;

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.sub = this.studentService.students$.subscribe(() => {
      this.totalStudents = this.studentService.getTotalStudents();
      this.averageMarks = this.studentService.getAverageMarks();
      this.topStudent = this.studentService.getTopStudent();
    });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
}
