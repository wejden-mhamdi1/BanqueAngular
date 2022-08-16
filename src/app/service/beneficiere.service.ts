import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { BeneficiereModule } from '../model/beneficiere/beneficiere.module';

@Injectable({
  providedIn: 'root'
})
export class BeneficiereService {
  output :BeneficiereModule;
benf :BeneficiereModule;
public URLsendOTP : string = 'http://localhost:8089/sms/mobileNo';
public getUrl : string = 'http://localhost:8089/Beneficiere/getAll';
public URLmod : string = 'http://localhost:8089/Beneficiere/modify';
public ajouURL : string = 'http://localhost:8089/Beneficiere/ajoutBeneft';

public serverurl : string ='http://localhost:8089/';

  constructor(private http:HttpClient) { 
  }
  //ajout
  
  ajout(benef:BeneficiereModule){
    return this.http.post(this.ajouURL, benef)

  }
    //Finajout
  getAll() : Observable< BeneficiereModule[]>{
    return this.http.get<BeneficiereModule[]>( this.getUrl);}
    
      //sendSms id
      public get(id : number ) {
        const url = 'http://localhost:8089/Beneficiere/get/';
        return this.http.get(`${url}${id}`);
      }
      //deleteeeeeeeeeeeee

      public delete(id : number ) {
        const url1 = 'http://localhost:8089/Beneficiere/Delete/';
        return this.http.delete(`${url1}${id}`);
      }
    

      
      
        public getone2(id : number) {//
          
        //  const url: string = '${this.serverurl}/Beneficiere/get/${id}';
        const url11 = 'http://localhost:8089/Beneficiere/get/${id}';
      
          return this.http.get<BeneficiereModule[]>(`${url11}${id}`);//.pipe(catchError(this.handleError))
        
          }

      public handleError(error:HttpErrorResponse){

        let errorMessage : string='';
        if(error.error instanceof ErrorEvent){
        
        errorMessage  = 'Error : ${error.error.message}'
        }else{
        
        
        errorMessage  = ' Status : ${error.status} \n Message: ${error.message}';
        }
        return throwError(errorMessage);
        }
}
