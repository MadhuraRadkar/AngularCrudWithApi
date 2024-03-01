import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { Employee } from './Employee';

@Component({
  selector: 'app-book',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder,private employeeService:EmployeeService){}
  ngOnInit(): void {
   
    this.getAllEmployees();
  }
 isUpdatedBtn:boolean=false;

 empForm=this.fb.group({
  id:[],
  name:['',Validators.required],
  email:['',Validators.required],
  age:[,Validators.required],
  salary:[,Validators.required]
 });
 // get properties for each control
 get id(){
  return this.empForm.get('id');
 }
 get name(){
  return this.empForm.get('name');
 }
 get email(){
  return this.empForm.get('email');
 }
 get age(){
  return this.empForm.get('age');
 }
 get salary(){
  return this.empForm.get('salary');
 }

empList:any=[];

getAllEmployees(){
  this.employeeService.getAllEmployees().subscribe(result=>{
    this.empList=result;
  });
}
edit(employee:any){
this.isUpdatedBtn=true;
this.empForm.setValue({
id:employee.id,
name:employee.name,
email:employee.email,
age:employee.age,
salary:employee.salary
});
}
delete(id:number){
  let result=confirm('Do you want to delete ?');
  if(result==true){
    this.employeeService.deleteEmployee(id).subscribe(res=>{
      alert('Record deleted');
    })
  }
  this.getAllEmployees();
  this.clearForm();
}
employee:any={};
saveEmployee()
{
this.employee.name=this.empForm.value.name;
this.employee.email=this.empForm.value.email;
this.employee.age=this.empForm.value.age;
this.employee.salary=this.empForm.value.salary;
if(!this.isUpdatedBtn){
   this.employeeService.addEmployee(this.employee).subscribe(res=>{
    alert('Record inserted');
    this.getAllEmployees();
   });
}
else{
  this.employee.id=this.empForm.value.id;
  this.employeeService.updateEmployee(this.employee).subscribe(res=>{
    alert('Record updated');
    this.getAllEmployees();
   });
}
this.clearForm();
}

clearForm()
{
  this.empForm.reset();
  this.isUpdatedBtn=false;
}


}