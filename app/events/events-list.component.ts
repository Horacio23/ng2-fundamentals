import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
        </div> 
    `
})
export class EventsListComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
