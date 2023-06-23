import { Component, OnInit } from '@angular/core';
import { TripReservationService } from '../trip-reservation.service';
import { TripDetails } from '../TripDetails';

@Component({
  selector: 'app-show-trips',
  templateUrl: './show-trips.component.html',
  styleUrls: ['./show-trips.component.css']
})
export class ShowTripsComponent implements OnInit {
  trips!: TripDetails[]; 
  constructor(private tripReservationService: TripReservationService ) { }

  ngOnInit(): void {
    this.getTrips();
   }
   private getTrips(){
     this.tripReservationService.getTrip().subscribe(data => {
       this.trips = data;
     });
    }
   }