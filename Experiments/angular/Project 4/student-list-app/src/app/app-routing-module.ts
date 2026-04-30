import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './home/home';
import { Students } from './students/students';
import { AddStudent } from './add-student/add-student';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'students', component: Students },
  { path: 'add', component: AddStudent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
