import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MyavailabilityComponent } from './dashboard/myavailability/myavailability.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';






@NgModule({
  declarations: [
    AppComponent,
    MyavailabilityComponent,
    NotificationComponent,
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 1000, countDuplicates: true, preventDuplicates: true}),
    AppRoutingModule,
    HttpClientModule,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule 
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
