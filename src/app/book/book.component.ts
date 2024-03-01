import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BookService } from './book.service';
import { Book } from './Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private fb:FormBuilder,private bookService:BookService){}
  ngOnInit(): void {
    // when component get loaded this method get called automatically by component
    this.getAllBooks();
  }
 isUpdatedBtn:boolean=false;

 bookForm=this.fb.group({
  id:[],
  name:['',Validators.required],
  author:['',Validators.required],
  price:[,Validators.required]
 });
 // get properties for each control
 get id(){
  return this.bookForm.get('id');
 }
 get name(){
  return this.bookForm.get('name');
 }
 get author(){
  return this.bookForm.get('author');
 }
 get price(){
  return this.bookForm.get('price');
 }

bookList:any=[];

getAllBooks(){
  this.bookService.getAllBooks().subscribe(result=>{
    this.bookList=result;
  });
}
edit(book:any){
this.isUpdatedBtn=true;
this.bookForm.setValue({
id:book.id,
name:book.name,
author:book.author,
price:book.price
});
}
delete(id:number){
  let result=confirm('Do you want to delete ?');
  if(result==true){
    this.bookService.deleteBook(id).subscribe(res=>{
      alert('Record deleted');
    })
  }
  this.getAllBooks();
  this.clearForm();
}
book:any={};
saveBook()
{
this.book.name=this.bookForm.value.name;
this.book.author=this.bookForm.value.author;
this.book.price=this.bookForm.value.price;
if(!this.isUpdatedBtn){
   this.bookService.addBook(this.book).subscribe(res=>{
    alert('Record inserted');
    this.getAllBooks();
   });
}
else{
  this.book.id=this.bookForm.value.id;
  this.bookService.updateBook(this.book).subscribe(res=>{
    alert('Record updated');
    this.getAllBooks();
   });
}
this.clearForm();
}

clearForm()
{
  this.bookForm.reset();
  this.isUpdatedBtn=false;
}


}