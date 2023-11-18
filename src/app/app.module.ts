import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './ourServices/services.component';
import { SpecializationComponent } from './specialization/specialization.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { QuestioinsComponent } from './questioins/questioins.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ErrorComponent } from './error/error.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button';
import { BookDialogueComponent } from './book-dialogue/book-dialogue.component';
import { ContinueBookComponent } from './continue-book/continue-book.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ContinueBookingComponent } from './continue-booking/continue-booking.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    SpecializationComponent,
    ContactComponent,
    FooterComponent,
    QuestioinsComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    DoctorComponent,
    BookDialogueComponent,
    ContinueBookComponent,
    ContinueBookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule, 
    MatButtonModule,
    ReactiveFormsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
