import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
    template: `
        <div>
            <h1> Upcoming Angular 2 Events </h1>
            <hr/>
            <div class="row" >
                <div class="col-md-5" *ngFor="let e of events">
                    <event-thumbnail #thumbnail (click)="handleThumbnailClick(e.name)" [event]="e"></event-thumbnail>
                </div>
            </div>
        </div> 
    `
})
export class EventsListComponent implements OnInit {
    events: any[];
    
    constructor(private _eventService: EventService, private toastr: ToastrService){
    }

    ngOnInit() {
       this.events = this._eventService.getEvents(); 
    }

    handleThumbnailClick(eventName){
        this.toastr.success(eventName);
    }
}
