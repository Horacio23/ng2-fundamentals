import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

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
    events: any;
    
    constructor(private _eventService: EventService,
                private toastr: ToastrService,
                private _route:ActivatedRoute){
    }

    ngOnInit() {
        this.events = this._route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName){
        this.toastr.success(eventName);
    }
}
