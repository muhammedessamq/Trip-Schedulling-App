import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripReservationService } from '../trip-reservation.service';
import { TripDetails } from '../TripDetails';

@Component({
  selector: 'app-update-trip',
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.css']
})
export class UpdateTripComponent implements OnInit {
  
  trip :TripDetails = new TripDetails();
  tripId!:number;
  constructor(private tripReservationService:TripReservationService,
    private router: Router) { }


  ngOnInit(): void {
}

updateTrip(){
  this.tripReservationService.updateTrip(this.trip,this.tripId).subscribe(data => {
    //this.GoToHomePage()
  })
}
GoToHomePage() {
  this.router.navigate(['trip'])

}
};