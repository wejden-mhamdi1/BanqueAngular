import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeneficiereModule } from '../model/beneficiere/beneficiere.module';
import { BeneficiereService } from '../service/beneficiere.service';

@Component({
  selector: 'app-show-benf',
  templateUrl: './show-benf.component.html',
  styleUrls: ['./show-benf.component.css']
})
export class ShowBenfComponent implements OnInit {
  public loading: boolean= false;
  public id : any| null = null;
   contact : BeneficiereModule [];
  List: BeneficiereModule[];
  public errorMessage : string|null= null;
  constructor(private activatedRoute : ActivatedRoute, private BeneficiereService :BeneficiereService) { }

  ngOnInit(): void {
    //this.BeneficiereService.getone2(this.id).subscribe(prods=> 
    
    
    //this.BeneficiereService.getone2(1).subscribe((prods)=>
    //{console.log(prods); 
    //this.List = prods});
    
   // this.activatedRoute.paramMap.subscribe((
    //  param) =>{

    //  this.id = param.get('id');
   // });
      if(this.id){
        //this.loading = true;
        this.BeneficiereService.getone2(1).subscribe((prods)=>
          {  
            this.List = prods;
            console.log(prods);
            
          //  this.loading = false ;
         }, 
        (error) =>
        { this.errorMessage= error;this.loading = false; }
        );
        
    }
    
      
      
      
      }
    public isNotEmpty(){
return Object.keys(this.contact).length>0 ;}



}
  
