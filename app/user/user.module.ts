import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';

import { userRoutes } from './user.routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
    ],
    declarations: [
        ProfileComponent,
        LoginComponent,
    ],
    providers: [],
})
export class UserModule { }

