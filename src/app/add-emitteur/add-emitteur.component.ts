import { Component, OnInit } from '@angular/core';
import { EmetteurServiceService } from '../service/emetteur-service.service';
import { ExpiditeurModule } from '../../app/model/expiditeur/expiditeur.module';
import {  FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-emitteur',
  templateUrl: './add-emitteur.component.html',
  styleUrls: ['./add-emitteur.component.css']
})
export class AddEmitteurComponent implements OnInit {
  chercherCollaboration: String = '';
  collaborationsList: any;
  clickedCollaboration: ExpiditeurModule;
  collaborationForm: any;
  list:any;
  constructor(
   
    private EmetteurServiceService : EmetteurServiceService , private _router:Router, private modalService: NgbModal, private FormBuilder : FormBuilder){ 

      this.collaborationForm = this.FormBuilder.group({
   
     
        Nom: ['', [Validators.required]],
        Prenom: ['', [Validators.required]],
        Tel: ['', [
          Validators.required,
          Validators.pattern('^[0-9]{8}'),
        ]],
        Cin_exp: ['', [Validators.required]],
        Adresse: ['', [Validators.required]]
      });
    }//
  exp : ExpiditeurModule = new ExpiditeurModule();

  ngOnInit() {
   
   
  }
  get Nom() {
    return this.collaborationForm.get('Nom');
  }
  get Prenom() {
    return this.collaborationForm.get('Prenom');
  }
  get Tel() {
    return this.collaborationForm.get('Tel');
  }
  get Cin_exp() {
    return this.collaborationForm.get('Cin_exp');
  }
  get Adresse() {
    return this.collaborationForm.get('Adresse');
  }
  // DEBUT delete
  deleteCollaboration(collaboration: ExpiditeurModule) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.EmetteurServiceService.delete(collaboration.id).subscribe({
          next: () => {
            Swal.fire('Deleted!', 'emitter has been deleted.', 'success');
            this.collaborationsList = this.collaborationsList.filter(
             // (e) => e.id !== collaboration.id
            );
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
  }
  // FIN delete
  //Debut OPEN
  open(content: any, modalDimension: any, e: any) {
    if (e) e.preventDefault();
    this.modalService
      .open(content, {
        centered: true,
        size: modalDimension,
        backdrop: 'static',
        keyboard: false,
        scrollable: true,
      })
      .result.then(
        (result) => {
          this.reinitialiseForms();
        },
        (reason) => {
          this.reinitialiseForms();
        }
      );
  }
  reinitialiseForms() {
    this.collaborationForm.reset();
  }
  //FIN OPEN
  //DEBUT AJOUT
  saveCollaboration() {
    console.log(this.collaborationForm.value);
    this.EmetteurServiceService
      .ajout(this.exp).subscribe({
        next: (res) => {
          console.log(res);
          Swal.fire(
            'Success!',
            `emitter has been added successfully`,
            'success'
          );
          this.modalService.dismissAll();
         this.collaborationsList.push(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
  //FIN AJOUT 

 
  ajout(){
    this.EmetteurServiceService.ajout(this.exp).subscribe(()=>this._router.navigateByUrl("/addEXp"));//homrlistuser

    }
    s() {
      console.log(this.collaborationForm.value);
      this.EmetteurServiceService.ajout(this.collaborationForm.value).subscribe({
        
          next: (res) => {
            console.log(res);
            Swal.fire(
              'Success add!',
              `show your E-mail`,
              'success'
            );
            this.modalService.dismissAll();
           this.list.push(res);
          },
          error: (err) => {
            console.log(err);
          },
        });
    }

   
}
