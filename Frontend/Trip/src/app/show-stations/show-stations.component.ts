import { Component, OnInit } from '@angular/core';
import { StationDetails } from '../station-details';
import { TripReservationService } from '../trip-reservation.service';

@Component({
  selector: 'app-show-stations',
  templateUrl: './show-stations.component.html',
  styleUrls: ['./show-stations.component.css']
})
export class ShowStationsComponent implements OnInit {

  stations!: StationDetails[]; 
  constructor(private tripReservationService: TripReservationService ) { }

  ngOnInit(): void {
    this.getStation();
   }
   private getStation(){
     this.tripReservationService.getStation().subscribe(data => {
       this.stations = data;
     });
    }
   }
