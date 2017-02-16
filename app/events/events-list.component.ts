import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1> Upcoming Angular 2 Events </h1>
            <hr/>
            <div class="row" >
                <div class="col-md-5" *ngFor="let e of events">
                    <event-thumbnail #thumbnail  (click)="handleThumbnailClick(e.name)" [event]="e"></event-thumbnail>
                </div>
            </div>
        </div> 
    `
})
export class EventsListComponent implements OnInit {
    // comment
    events: any[];
    
    constructor(private _eventService: EventService){
    }

    ngOnInit() {
       this.events = this._eventService.getEvents(); 
    }
}
