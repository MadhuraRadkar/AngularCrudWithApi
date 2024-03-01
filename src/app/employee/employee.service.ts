import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
 providedIn:'root'
})
export class EmployeeService
{
    // HTTPClient is a service from HTTPClientModule
    // it is used to make an http call-> get,post,put,delete
 constructor(private http:HttpClient){}
  url:string="http://localhost:5190/api/Employee/"; //url till controller

  public getAllEmployees():Observable<any>
  {
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      httpOptions.headers = httpOptions.headers.set('Authorization', '');
    return this.http.get<any>(this.url+"GetEmployees",httpOptions);//localhost:14781/api/Book/GetBooks
  }

  public addEmployee(employee:any):Observable<any>
  {
    const httpOptions = {
        // this is used to pass additional info in http headers
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };
      // '' we can pass JWT token
      httpOptions.headers = httpOptions.headers.set('Authorization', '');
      return this.http.post<any>(this.url+"AddEmployee",employee,httpOptions);
  }

  public updateEmployee(employee:any):Observable<any>
  {
    const httpOptions = {
        // this is used to pass additional info in http headers
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };
      // '' we can pass JWT token
      httpOptions.headers = httpOptions.headers.set('Authorization', '');
      return this.http.put<any>(this.url+"updateEmployee",employee,httpOptions);
  }
  public deleteEmployee(id:number):Observable<any>
  {
    const httpOptions = {
        // this is used to pass additional info in http headers
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };
      // '' we can pass JWT token
      httpOptions.headers = httpOptions.headers.set('Authorization', '');
      return this.http.delete<any>(this.url+"deleteEmployee/"+id,httpOptions);
  }
}