import { TripReservationService } from './../trip-reservation.service';
import { AdminDetails } from './../admin-details';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent implements OnInit {
 
  admin :AdminDetails = new AdminDetails();
  constructor(private tripReservationService:TripReservationService,
    private router: Router) {
   }

   saveAdmin(){
    this.tripReservationService.signUP(this.admin).subscribe(data =>{
      console.log(data);
      this.goToAdminsList();
    },
    error => console.log(error));

   }

   goToAdminsList(){
    this.router.navigate(['/getAdmin']);
   }
  ngOnInit(): void {
  }

 onSubmit(){
  console.log(this.admin);
  this.saveAdmin();
 }
}
