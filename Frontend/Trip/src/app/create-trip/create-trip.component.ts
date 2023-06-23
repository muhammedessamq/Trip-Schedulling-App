import { TripReservationService } from './../trip-reservation.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripDetails } from './../TripDetails';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {
 
  trip :TripDetails = new TripDetails();
  constructor(private tripReservationService:TripReservationService,
    private router: Router) {
   }

   saveTrip(){
    this.tripReservationService.createTrip(this.trip).subscribe(data =>{
      console.log(data);
      this.goToTripList();
    },
    error => console.log(error));

   }

   goToTripList(){
    this.router.navigate(['/getTrip']);
   }
  ngOnInit(): void {
  }

 onSubmit(){
  console.log(this.trip);
  this.saveTrip();
 }
}