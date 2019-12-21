import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputToggleComponent } from './input-toggle/input-toggle.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,  ReactiveFormsModule ],
  declarations: [ AppComponent, InputToggleComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
