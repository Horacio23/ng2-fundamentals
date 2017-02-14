import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1> Upcoming Angular 2 Events </h1>
            <hr/>
            <event-thumbnail #thumbnail [event]="event"></event-thumbnail>
            <h3>{{thumbnail.someProperty}}</h3>
            <button class="btn btn-primary" (click)="thumbnail.logFoo()"> Log me some Foo</button>
        </div> 
    `
})
export class EventsListComponent implements OnInit {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:30 am',
        price: 599.99,
        imageUrl: 'app/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

    handleEventClicked(data: string) {
        console.log(data);
    }
    constructor() { }

    ngOnInit() { }
}
