import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {
  students: Student[] = [];
  filteredStudents: Student[] = [];
  searchTerm: string = '';
  
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  private sub!: Subscription;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.sub = this.studentService.students$.subscribe(data => {
      this.students = data;
      this.applyFilter();
    });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  applyFilter(): void {
    if (!this.searchTerm) {
      this.filteredStudents = [...this.students];
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredStudents = this.students.filter(s => 
        s.name.toLowerCase().includes(term) || 
        s.course.toLowerCase().includes(term)
      );
    }
    this.applySort();
  }

  onSearchChange(event: any): void {
    this.searchTerm = event.target.value;
    this.applyFilter();
  }

  sortBy(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.applySort();
  }

  private applySort(): void {
    if (!this.sortColumn) return;

    this.filteredStudents.sort((a, b) => {
      let valA = (a as any)[this.sortColumn];
      let valB = (b as any)[this.sortColumn];

      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();

      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  deleteStudent(id: string, name: string): void {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      this.studentService.deleteStudent(id);
      // Optional: Add a toast/snackbar success message here
    }
  }
}
