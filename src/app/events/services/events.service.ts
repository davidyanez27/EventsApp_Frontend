import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

import { Event } from '../interfaces/event.interface';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class EventServices {

  private baseUrl: string = environments.baseUrl;


  constructor(private http: HttpClient) { }


  getEvents():Observable<Event[]> {
    return this.http.get<Event[]>(`${ this.baseUrl }/event`);
  }

  getEventById( id: string ): Observable<Event|undefined> {
    return this.http.get<Event>(`${ this.baseUrl }/event/${ id }`)
      .pipe(
        catchError( error => of(undefined) )
      );
  }

  getSuggestions( query: string ): Observable<Event[]> {
    return this.http.get<Event[]>(`${ this.baseUrl }/event?q=${ query }&_limit=6`);
  }


  addEvent( event: Event ): Observable<Event> {
    return this.http.post<Event>(`${ this.baseUrl }/event`, event );
  }

  updateEvent( event: Event ): Observable<Event> {
    if ( !event.eventId ) throw Error('Event id is required');

    return this.http.patch<Event>(`${ this.baseUrl }/event/${ event.eventId }`, event );
  }

  deleteEventById( id: string ): Observable<boolean> {

    return this.http.delete(`${ this.baseUrl }/event/${ id }`)
      .pipe(
        map( resp => true ),
        catchError( err => of(false) ),
      );
  }


}
