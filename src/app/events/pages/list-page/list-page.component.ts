import { Component, OnInit } from '@angular/core';
import { Event } from '../../interfaces/event.interface';
import { EventServices } from '../../services/events.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit {

  public event: Event[] = [];

  constructor( private EventService:EventServices ) {}

  ngOnInit(): void {
    this.EventService.getEvents()
      .subscribe( event => this.event = event );
  }

}
