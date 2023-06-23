import { AdminDetails } from './../admin-details';
import { TripReservationService } from './../trip-reservation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  admins!: AdminDetails[] ; 
  constructor(private tripReservationService: TripReservationService ) { }

  ngOnInit(): void {
   this.getAdmins();
  }
  private getAdmins(){
    this.tripReservationService.getAdminsList().subscribe(data => {
      this.admins = data;
    });
   }
  }

  


