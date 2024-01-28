import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HeroPageComponent } from './pages/Event-page/Event-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CardComponent } from './components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventRoutingModule } from './events-routing.module';

import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { HeroImagePipe } from './pipes/event-image.pipe';



@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CardComponent,

    HeroImagePipe,
     ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EventRoutingModule,
    MaterialModule,
  ]
})
export class EventsModule { }
