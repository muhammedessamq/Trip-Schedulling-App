import { AdminListComponent } from './admin-list/admin-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationComponent } from './station/station.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { UpdateTripComponent } from './update-trip/update-trip.component';
import { DeleteTripComponent } from './delete-trip/delete-trip.component';
import { ShowTripsComponent } from './show-trips/show-trips.component';
import { CreateStationComponent } from './create-station/create-station.component'
import { UpdateStationComponent } from './update-station/update-station.component';
import { DeleteStationComponent } from './delete-station/delete-station.component';
import { ShowStationsComponent } from './show-stations/show-stations.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
             UpdateTripComponent,
             DeleteTripComponent,
             ShowTripsComponent,
             CreateTripComponent,
             CreateStationComponent,
             UpdateStationComponent,
             DeleteStationComponent,
             ShowStationsComponent,
             AdminListComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }