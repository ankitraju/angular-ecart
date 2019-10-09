import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from '../first/first.component';
import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FirstComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
