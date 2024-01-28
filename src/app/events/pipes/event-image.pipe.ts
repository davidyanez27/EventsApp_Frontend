import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../interfaces/event.interface';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform( event: Event ) {

  }

}
