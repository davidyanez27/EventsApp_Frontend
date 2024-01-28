import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Event } from '../../interfaces/event.interface';
import { EventServices } from '../../services/events.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public events: Event[] = [];
  public selectedEvent?: Event;

  constructor( private eventService: EventServices ){}

  searchEvent() {
    const value: string = this.searchInput.value || '';

    this.eventService.getSuggestions( value )
      .subscribe( event => this.events = event );
  }


  onSelectedOption( event: MatAutocompleteSelectedEvent ): void {
    if ( !event.option.value ) {
      this.selectedEvent = undefined;
      return;
    }

    const data: Event = event.option.value;
    this.searchInput.setValue( data.eventName );

    this.selectedEvent = data;

  }


}
