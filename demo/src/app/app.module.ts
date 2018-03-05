import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Select2boxDirective } from './select2box.directive';


@NgModule({
  declarations: [
    AppComponent,
    Select2boxDirective
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
