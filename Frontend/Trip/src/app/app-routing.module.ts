import { AdminListComponent } from './admin-list/admin-list.component';
import { ShowTripsComponent } from './show-trips/show-trips.component';
import { DeleteTripComponent } from './delete-trip/delete-trip.component';
import { UpdateTripComponent } from './update-trip/update-trip.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { TripComponent } from './trip/trip.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { SignIComponent } from './sign-i/sign-i.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStationComponent } from './create-station/create-station.component';
import { ShowStationsComponent } from './show-stations/show-stations.component';
import { UpdateStationComponent } from './update-station/update-station.component';
import { DeleteStationComponent } from './delete-station/delete-station.component';

const routes: Routes = [
  {path:'signI',component:SignIComponent},
  {path:'signUP',component:SignUPComponent},
  {path:'trip',component:TripComponent},
  {path:'createTrip',component:CreateTripComponent},
  {path:'updateTrip',component:UpdateTripComponent},
  {path:'deleteTrip',component:DeleteTripComponent},
  {path:'showTrips',component:ShowTripsComponent},
  {path:'viewList',component:AdminListComponent},
  {path:'createStation',component:CreateStationComponent},
  {path:'updateStation',component:UpdateStationComponent},
  {path:'deleteStation',component:DeleteStationComponent},
  {path:'showStations',component:ShowStationsComponent},
  {path:'',redirectTo:'signI',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SignIComponent,SignUPComponent,TripComponent,CreateTripComponent,UpdateTripComponent,DeleteTripComponent,ShowTripsComponent,AdminListComponent,CreateStationComponent,UpdateStationComponent,DeleteStationComponent,ShowStationsComponent]