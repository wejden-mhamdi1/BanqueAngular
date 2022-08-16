import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeneficiereModule } from '../model/beneficiere/beneficiere.module';
import { RetraitModule } from '../model/retrait/retrait.module';
import { RetraitService } from '../service/retrait.service';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SMSComponent implements OnInit {

  exp : BeneficiereModule = new BeneficiereModule();
  constructor(private RetraitService : RetraitService , private router: Router,private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  
  ajout(){
    this.RetraitService.ajout(this.exp).subscribe({
      next: (res) => {
        console.log(res);
        Swal.fire(
          'Success!',
          `le code OTP envoyer vers le beneficiere`,
          'success'
        );
        this.modalService.dismissAll();
      
      },
      error: (err) => {
        console.log(err);
      },
    });

}}
