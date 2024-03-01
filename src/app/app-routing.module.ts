import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'book',component:BookComponent},
  {path:'student',component:StudentComponent},
  {path:'employee',component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
