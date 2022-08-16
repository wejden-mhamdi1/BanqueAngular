import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BeneficiereModule } from '../model/beneficiere/beneficiere.module';
import { RetraitModule } from '../model/retrait/retrait.module';

@Injectable({
  providedIn: 'root'
})
export class RetraitService {
  public exptUrl : string = 'http://localhost:8089/sms/mobileNo';
  constructor(private http : HttpClient) { }
  
  ajout(benef:BeneficiereModule){
    return this.http.post(this.exptUrl, benef)

  }
  ///
  
  ///
  public exptUrl1 : string = 'http://localhost:8089/sms/otp';
 
  retraiter(benef:RetraitModule){
    return this.http.post(this.exptUrl1, benef)

  }
}
