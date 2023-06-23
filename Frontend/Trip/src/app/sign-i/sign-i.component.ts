import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDetails } from '../admin-details';
import { TripReservationService } from '../trip-reservation.service';
@Component({
  selector: 'app-sign-i',
  templateUrl: './sign-i.component.html',
  styleUrls: ['./sign-i.component.css']
})
export class SignIComponent implements OnInit {

  admin :AdminDetails = new AdminDetails();
  constructor(private tripReservationService:TripReservationService,
    private router: Router) {
   }

   saveAdmin(){
    this.tripReservationService.signin(this.admin).subscribe(data =>{
      alert("Login Successfully")
      this.goToTrip()
    },
    error => {alert("Incorrect username or password")}

   )}
    goToTrip(){
      this.router.navigate(['/trip'])
    }
 
  ngOnInit(): void {
  }

 onSubmit(){
  console.log(this.admin);
  this.saveAdmin();
 }
}
