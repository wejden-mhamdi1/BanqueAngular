import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ng add @ng-bootstrap/ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { TemplatComponent } from './templat/templat.component';
import { AddEmitteurComponent } from './add-emitteur/add-emitteur.component';
import { BeneficiereComponent } from './beneficiere/beneficiere.component';
import { RetraitComponent } from './retrait/retrait.component';
import { LoadingComponent } from './loading/loading.component';
import { SMSComponent } from './sms/sms.component';
import { ShowBenfComponent } from './show-benf/show-benf.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { NgOtpInputModule } from 'ng-otp-input';



@NgModule({
  declarations: [
    AppComponent,
    AddEmitteurComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    TemplatComponent,
    BeneficiereComponent,
    RetraitComponent,
    LoadingComponent,
    SMSComponent,
    ShowBenfComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,  
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxCaptchaModule,
    NgOtpInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
