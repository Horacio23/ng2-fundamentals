// Packages
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Components
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { 
    //components
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    //services
    EventRouteActivator,
    EventListResolver,
 } from './events/index';


// Services
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';

// Routes
import { appRoutes } from './routes';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent, 
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        EventListResolver,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ],
    bootstrap: [EventsAppComponent],
})
export class AppModule { }

function checkDirtyState(component:CreateEventComponent) {
    if(component.isDirty){
        return window.confirm("You have not saved this event, do you want to cancel it?")
    }
    return true;
}
