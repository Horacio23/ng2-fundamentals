import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser;
    loginUser(userName: string, password:string){
        this.currentUser = {
            id: 1,
            firstname: 'John',
            lastname: 'Papa',
            username: userName,
        }
    }

    isAuthenticated(){
        return !!this.currentUser; 
    }

    updateCurrentUser(firstName:string, lastName:string){
        this.currentUser.firstname = firstName;
        this.currentUser.lastname = lastName;
    }
}
