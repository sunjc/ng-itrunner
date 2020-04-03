import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgItrunnerModule} from 'ng-itrunner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgItrunnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
