import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Select2boxDirective } from './select2box.directive';
import { LonglistComponent } from './longlist/longlist.component';
import { VirtualScrollModule } from 'angular2-virtual-scroll';


@NgModule({
  declarations: [
    AppComponent,
    Select2boxDirective,
    LonglistComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    VirtualScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
