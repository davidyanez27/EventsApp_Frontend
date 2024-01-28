import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../interfaces/event.interface';

@Component({
  selector: 'events-event-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input()
  public event!: Event;


  ngOnInit(): void {
    if ( !this.event ) throw Error('event property is required');
  }

}
