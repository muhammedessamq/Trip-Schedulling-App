import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripReservationService } from '../trip-reservation.service';
import { TripDetails } from '../TripDetails';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit {
  
  trip :TripDetails = new TripDetails();
  constructor(private tripReservationService:TripReservationService,
    private router: Router) { }

  ngOnInit(): void {
  }
  deleteTrip(){
    this.tripReservationService.deleteTrip(this.trip).subscribe(data => {
      this.GoToHomePage()
    })
  }
  GoToHomePage() {
    this.router.navigate(['trip'])

  }

}
