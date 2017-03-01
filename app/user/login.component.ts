import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    constructor(private _authService: AuthService,
                private router: Router) { }

    login(formValues){
        this._authService.loginUser(formValues.userName, formValues.password);
        this.router.navigate(['events']);
    }

    cancel(){
        this.router.navigate(['events']);
    }
    ngOnInit() { }
}
