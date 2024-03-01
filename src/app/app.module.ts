import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BookService } from './book/book.service';
import { StudentComponent } from './student/student.component';
import { StudentService } from './student/student.service';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    StudentComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // for http request & response to api
    ReactiveFormsModule  // for form
  ],
  providers: [BookService,StudentService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
