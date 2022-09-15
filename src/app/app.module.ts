import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { HttpClientModule } from '@angular/common/http'
import { CommonService } from './services/common.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component'

//Angular Material Imports
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FillupDetailsComponent } from './fillup-details/fillup-details.component'
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    FillupDetailsComponent,
    ConfirmationComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //Angular Material Modules
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
