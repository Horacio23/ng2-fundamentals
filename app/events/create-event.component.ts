import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    moduleId: module.id,
    template: `
        <h1>New Event</h1>
        <hr>
        <div class="col-md-6">
            <h3>[Create event Form will go here]</h3>
            <br/>
            <br/>
            <button type="submit" class="btn btn-primary">Save</button>
            <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>

        </div>
    `
    // templateUrl: 'create-event.component.html'
})
export class CreateEventComponent implements OnInit {
    constructor(private _router: Router) { }

    ngOnInit() { }

    cancel(){
       this._router.navigate(['/events']);
    }
}
