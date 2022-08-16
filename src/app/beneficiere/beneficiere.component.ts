import { Component, OnInit , ViewChild} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { BeneficiereModule } from '../model/beneficiere/beneficiere.module';
import { BeneficiereService } from '../service/beneficiere.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-beneficiere',
  templateUrl: './beneficiere.component.html',
  styleUrls: ['./beneficiere.component.css']
})
export class BeneficiereComponent implements OnInit {
  form:any;
  ListTrie: BeneficiereModule[];
  list:any;
  ListONE :BeneficiereModule[];
 
  clicked :BeneficiereModule;
  @ViewChild('classic') classic :any ;
  //video
  public loading : boolean = false;
public errorMessage:string | null = null;
public table : BeneficiereModule[] =[] ;
  
 
  exp : BeneficiereModule = new BeneficiereModule();
  constructor(private BeneficiereService : BeneficiereService, private FormBuilder : FormBuilder,private modalService: NgbModal, private router: Router) { 
    this.form = this.FormBuilder.group({
      nom: ['',[Validators.required]],
      prenom :['',[Validators.required]],
      adresse:['',[Validators.required]],
      email :['',[Validators.required]],
      tel: ['',[Validators.required ]],
      cin_benef :['',[Validators.required]]
      



    });
  }

  ngOnInit() {
     //getAll evaluate
   this.BeneficiereService.getAll().subscribe(prods=> {console.log(prods); this.ListTrie = prods});
   //this.BeneficiereService.getOne().subscribe(p=>{console.log(p); this.ListONE = p});
   //videoooooo
   this.loading = true;
this.BeneficiereService.getAll().subscribe( data => {
this.table = data;
this.loading= false;
},  (error) => { this.errorMessage = error;
this.loading = false;
}
);
}
      
  
 
  get nom(){
    return this.form.get('nom');
  }
  get prenom(){
    return this.form.get('prenom');
  }
  get adresse(){
    return this.form.get('adresse');
  }
  get email(){
    return this.form.get('email');
  }
  get tel(){
    return this.form.get('tel');
  }
  get cin_benef(){
    return this.form.get('cin_benef');
  }
  ajout(){
    this.BeneficiereService.ajout(this.exp).subscribe(()=>this.router.navigateByUrl("/ajout"));//homrlistuser

    }
    public get(id:number){
    
    // let  resp = this.BeneficiereService.getOne(id)
      //resp.subscribe()
  
      }
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
    this.form.reset();
  }
  //FIN OPEN


//DEBUT AJOUT
s() {
  console.log(this.form.value);
  this.BeneficiereService.ajout(this.form.value).subscribe({
    
      next: (res) => {
        console.log(res);
        Swal.fire(
          'Success!',
          `you are add beneficiary `,
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
//FIN AJOUT 
deleteCollaboration(BeneficiereModule: BeneficiereModule) {
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
      this.BeneficiereService.delete(BeneficiereModule.id).subscribe({
        next: () => {
          Swal.fire('Deleted!', 'Beneficiere has been deleted.', 'success');
          this.ListTrie = this.ListTrie.filter(
            (e) => e.id !== BeneficiereModule.id
          );
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  });
}

edit(BeneficiereModule: BeneficiereModule) {
  console.log('editing..', BeneficiereModule);
  this.clicked = BeneficiereModule;
  this.form.patchValue({
    ...BeneficiereModule,
    
  });
  console.log(this.form.value);
  this.open(this.classic, 'xl', null);
}

}
