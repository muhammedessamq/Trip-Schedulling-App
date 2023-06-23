import { AdminDetails } from './admin-details';
import { SignIComponent } from './sign-i/sign-i.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TripDetails } from './TripDetails';
import { HttpClient } from '@angular/common/http'
import { StationDetails } from './station-details';
import { DeleteTripComponent } from './delete-trip/delete-trip.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TripReservationService {

constructor(private httpClient: HttpClient) { }

getAdminsList(): Observable<AdminDetails[]>{
  return this.httpClient.get<AdminDetails[]>(`${environment.apiUrl}/api/v1/trip/getAdmin`);
  }

signUP(admin:AdminDetails): Observable<object>{
  return this.httpClient.post<AdminDetails>(`${environment.apiUrl}/api/v1/trip/signup`,admin);
}

signin(admin:AdminDetails): Observable<object>{
  return this.httpClient.post<AdminDetails>(`${environment.apiUrl}/api/v1/trip/signin`,admin);
}

createTrip(trip:TripDetails): Observable<object>{
  return this.httpClient.post<TripDetails>(`${environment.apiUrl}/api/v1/trip/addTrip`,trip);
}

getTrip(): Observable<TripDetails[]>{
  return this.httpClient.get<TripDetails[]>(`${environment.apiUrl}/api/v1/trip/getTrip`);
}

updateTrip( trip : TripDetails,tripId:number): Observable<object>{
  return this.httpClient.put<TripDetails>(`${environment.apiUrl}/api/v1/trip/updateTrip/${tripId}`,trip);
}

deleteTrip(trip:TripDetails):Observable<Object>{
  return this.httpClient.delete(`${environment.apiUrl}/api/v1/trip/deleteTrip/${trip.tripId}`);
}

createStation(station:StationDetails): Observable<object>{
  return this.httpClient.post<StationDetails>(`${environment.apiUrl}/api/v1/trip/addStation`,station);
}

getStation(): Observable<StationDetails[]>{
  return this.httpClient.get<StationDetails[]>(`${environment.apiUrl}/api/v1/trip/getStation`);
}

deleteStation(station:StationDetails):Observable<Object>{
    return this.httpClient.delete(`${environment.apiUrl}/api/v1/trip/deleteStation/${station.stationId}`);
}

}