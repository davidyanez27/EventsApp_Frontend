import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { EventServices } from '../../services/events.service';
import { Event } from '../../interfaces/event.interface';

@Component({
  selector: 'app-event-page',
  templateUrl: './Event-page.component.html',
  styles: [
  ]
})
export class HeroPageComponent implements OnInit {

  public event?: Event;

  constructor(
    private eventsService: EventServices,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.eventsService.getEventById( id )),
      )
      .subscribe( event => {

        if ( !event ) return this.router.navigate([ '/events/list' ]);

        this.event = event;
        return;
      })
  }

  goBack():void {
    this.router.navigateByUrl('events/list')
  }

}
