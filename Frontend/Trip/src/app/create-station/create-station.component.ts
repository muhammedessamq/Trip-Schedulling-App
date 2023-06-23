import { TripReservationService } from './../trip-reservation.service';
import { StationDetails } from './../station-details';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-station',
  templateUrl: './create-station.component.html',
  styleUrls: ['./create-station.component.css']
})

export class CreateStationComponent implements OnInit {
 
  station :StationDetails = new StationDetails();
  constructor(private tripReservationService:TripReservationService,
    private router: Router) {
   }

   saveStation(){
    this.tripReservationService.createStation(this.station).subscribe(data =>{
      console.log(data);
      this.goToStationList();
    },
    error => console.log(error));

   }

   goToStationList(){
    this.router.navigate(['/getStation']);
   }
  ngOnInit(): void {
  }

 onSubmit(){
  console.log(this.station);
  this.saveStation();
 }
}