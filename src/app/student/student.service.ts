import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
 providedIn:'root'
})
export class StudentService
{
    // HTTPClient is a service from HTTPClientModule
    // it is used to make an http call-> get,post,put,delete
 constructor(private http:HttpClient){}
  url:string="http://localhost:5190/api/Student/"; //url till controller



  public getAllStudents():Observable<any>
  {
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      httpOptions.headers = httpOptions.headers.set('Authorization', '');
    return this.http.get<any>(this.url+"GetStudents",httpOptions);//localhost:14781/api/Book/GetBooks
  }

  public addStudent(student:any):Observable<any>
  {
    const httpOptions = {
        // this is used to pass additional info in http headers
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };
      // '' we can pass JWT token
      httpOptions.headers = httpOptions.headers.set('Authorization', '');
      return this.http.post<any>(this.url+"AddStudent",student,httpOptions);
  }

  public updateStudent(student:any):Observable<any>
  {
    const httpOptions = {
        // this is used to pass additional info in http headers
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };
      // '' we can pass JWT token
      httpOptions.headers = httpOptions.headers.set('Authorization', '');
      return this.http.put<any>(this.url+"updateStudent",student,httpOptions);
  }
  public deleteStudent(id:number):Observable<any>
  {
    const httpOptions = {
        // this is used to pass additional info in http headers
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };
      // '' we can pass JWT token
      httpOptions.headers = httpOptions.headers.set('Authorization', '');
      return this.http.delete<any>(this.url+"deleteStudent/"+id,httpOptions);
  }
  
  
}