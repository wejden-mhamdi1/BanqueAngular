import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { RetraitModule } from '../model/retrait/retrait.module';
import { RetraitService } from '../service/retrait.service';
@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {
  exp : RetraitModule = new RetraitModule();
  list:any;
  public aFormGroup: FormGroup;
  constructor(private RetraitService : RetraitService,private router: Router,private modalService: NgbModal,private FormBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.aFormGroup = this.FormBuilder.group({
      recaptcha: ['', Validators.required]
    });

  }
  siteKey : string ="6LeerjchAAAAAB7JcYMukTyP7kMUw6ja2b2LZS1R";
  //
  title = 'otp-app';

  otp!: string;
  inputDigitLeft: string = "Verify code";
  btnStatus: string = "btn-light";

  public configOptions = {
    length: 6,
    inputClass: 'digit-otp',
    containerClass: 'd-flex justify-content-between'
  }
 



  //
  retraiter(){
    this.exp.codeR=Number(this.otp);
    console.log(this.otp);
    this.RetraitService.retraiter(this.exp).subscribe( res => {
      console.log(res);
      if(res==true){
      alert("success OTP");}
      else
      alert("error OTP");

    });


}
//forme

  
  

  onOtpChange(event: any) {
    this.otp = event;
    if(this.otp.length < this.configOptions.length) {
      this.inputDigitLeft = this.configOptions.length - this.otp.length + " Encore";
      this.btnStatus = 'btn-light';
      
    }

    if(this.otp.length == this.configOptions.length) {
      this.inputDigitLeft = "verifier!";
      this.btnStatus = 'btn-primary';
    }
  }



}
