import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-fillup-details',
  templateUrl: './fillup-details.component.html',
  styleUrls: ['./fillup-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FillupDetailsComponent implements OnInit {
  userDetails: FormGroup;
  userLogin: FormGroup;
  isExistingCustomer: string = '';

  constructor(private fb: FormBuilder, private dialog: MatDialog) { 
    this.userDetails = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z]+$/i)]),
      lastName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z]+$/i)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/)]),
      mobile: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required, Validators.pattern('[0-9]{6}')]),
    });

    this.userLogin = this.fb.group({
      username: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/)])
    });
  }


  ngOnInit(): void {
  
  }

  submit() {
    console.log(this.userDetails.value)

    const confirmationDialog = this.dialog.open(ConfirmationComponent, {
      data: {type: 'Success'}
    })
  }

  login() {
    console.log(this.userLogin.value)
    const confirmationDialog = this.dialog.open(ConfirmationComponent, {
      data: {type: 'Failure'}
    })
  }

}
