import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'profile.component.html',
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private auth: AuthService,
              private router: Router){}

  ngOnInit() {
    let firstName = new FormControl(this.auth.currentUser.firstname);
    let lastName = new FormControl(this.auth.currentUser.lastname);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }
       
  saveProfile(formValues) {
    this.auth.updateCurrentUser(formValues.firstName,
                                formValues.lastName);
    this.router.navigate(['events']);
  }
  cancel() {
    this.router.navigate(['events']);
  }
}
