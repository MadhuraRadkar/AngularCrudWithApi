import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private fb:FormBuilder,private studentService:StudentService){}
  ngOnInit(): void {
    // when component get loaded this method get called automatically by component
    this.getAllStudents();
  }
 isUpdatedBtn:boolean=false;

 studForm=this.fb.group({
  id:[],
  name:['',Validators.required],
  city:['',Validators.required],
  percentage:[,Validators.required]
 });
 // get properties for each control
 get id(){
  return this.studForm.get('id');
 }
 get name(){
  return this.studForm.get('name');
 }
 get city(){
  return this.studForm.get('city');
 }
 get percentage(){
  return this.studForm.get('percentage');
 }

studList:any=[];

getAllStudents(){
  this.studentService.getAllStudents().subscribe(result=>{
    this.studList=result;
  });
}
edit(student:any){
this.isUpdatedBtn=true;
this.studForm.setValue({
id:student.id,
name:student.name,
city:student.city,
percentage:student.percentage
});
}
delete(id:number){
  let result=confirm('Do you want to delete ?');
  if(result==true){
    this.studentService.deleteStudent(id).subscribe(res=>{
      alert('Record deleted');
    })
  }
  this.getAllStudents();
  this.clearForm();
}
student:any={};
saveStudent()
{
this.student.name=this.studForm.value.name;
this.student.city=this.studForm.value.city;
this.student.percentage=this.studForm.value.percentage;
if(!this.isUpdatedBtn){
   this.studentService.addStudent(this.student).subscribe(res=>{
    alert('Record inserted');
    this.getAllStudents();
   });
}
else{
  this.student.id=this.studForm.value.id;
  this.studentService.updateStudent(this.student).subscribe(res=>{
    alert('Record updated');
    this.getAllStudents();
   });
}
this.clearForm();
}

clearForm()
{
  this.studForm.reset();
  this.isUpdatedBtn=false;
}



}
