import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ExpiditeurModule } from '../../app/model/expiditeur/expiditeur.module';
@Injectable({
  providedIn: 'root'
})
export class EmetteurServiceService {
  ab :ExpiditeurModule;
  

  public exptUrl : string = 'http://localhost:8089/Expiditeur/ajout';
  public URL : string = 'http://localhost:8089/Expiditeur/';

  constructor(private http : HttpClient) { }

  ajout(ab :ExpiditeurModule){
   
     
    return this.http.post(this.exptUrl, ab)}

    delete(id: Number) {
      return this.http.delete(this.URL + `Delete/${id}`);
    }
   

   
}
