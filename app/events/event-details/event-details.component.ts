import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/index';

@Component({
    moduleId: module.id,
    templateUrl: 'event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
    `]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;

    constructor(private _eventService: EventService, private _route: ActivatedRoute) { }

    ngOnInit() { 
        // the + in front of the this._route is to cast to a number
        this.event = this._eventService.getEvent(+this._route.snapshot.params['id']);
    }
}
