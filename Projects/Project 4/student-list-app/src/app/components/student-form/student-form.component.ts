import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup;
  isEditMode = false;
  studentId: string | null = null;
  submitted = false;
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.min(1)]],
      course: ['', Validators.required],
      marks: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('id');
    if (this.studentId) {
      this.isEditMode = true;
      const student = this.studentService.getStudentById(this.studentId);
      if (student) {
        this.studentForm.patchValue({
          name: student.name,
          age: student.age,
          course: student.course,
          marks: student.marks
        });
      } else {
        this.router.navigate(['/students']);
      }
    }
  }

  // Getter for easy access to form fields in template
  get f() { return this.studentForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.studentForm.invalid) {
      return;
    }

    if (this.isEditMode && this.studentId) {
      this.studentService.updateStudent({
        id: this.studentId,
        ...this.studentForm.value
      });
      this.showSuccess('Student updated successfully!');
    } else {
      this.studentService.addStudent(this.studentForm.value);
      this.showSuccess('Student added successfully!');
    }
  }

  private showSuccess(message: string): void {
    this.successMessage = message;
    setTimeout(() => {
      this.router.navigate(['/students']);
    }, 1500);
  }
}
