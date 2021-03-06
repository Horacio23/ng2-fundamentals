import { Component, OnInit } from '@angular/core'
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'profile.component.html',
  styles: [`
       em { float: right; color: #E05C65; padding-left:10px; } 
       .error input{ background-color: #E3C3C5 }
       .error ::-webkit-input-placeholder { color:#999 }
       .error ::-moz-placeholder { color:#999 }
       .error :-moz-placeholder { color:#999 }
       .error :ms-input-placeholder { color:#999 }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private auth: AuthService,
              private router: Router){}

  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstname,[ Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastname, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }
       
  saveProfile(formValues) {
    if(this.profileForm.valid){
      this.auth.updateCurrentUser(formValues.firstName,
                                  formValues.lastName);
      this.router.navigate(['events']);
    }
  }
  cancel() {
    this.router.navigate(['events']);
  }

  validFirstName() {
    return this.firstName.valid || this.firstName.untouched
  }
  validLastName() {
    return this.lastName.valid || this.lastName.untouched
  }
}
