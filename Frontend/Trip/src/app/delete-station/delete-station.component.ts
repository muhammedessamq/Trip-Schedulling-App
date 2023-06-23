import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StationDetails } from '../station-details';
import { TripReservationService } from '../trip-reservation.service';

@Component({
  selector: 'app-delete-station',
  templateUrl: './delete-station.component.html',
  styleUrls: ['./delete-station.component.css']
})
export class DeleteStationComponent implements OnInit {

  station :StationDetails = new StationDetails();

  constructor(private tripReservationService:TripReservationService,
    private router: Router) { }

  ngOnInit(): void {
  }
  deleteStation(){
    this.tripReservationService.deleteStation(this.station).subscribe(data => {
      this.GoToHomePage()
    })
  }
  GoToHomePage() {
    this.router.navigate(['trip'])

  }
}
