package com.example.demo.controller;
import com.example.demo.entity.Admin;
import com.example.demo.entity.Station;
import com.example.demo.entity.Trip;
import com.example.demo.service.AdminService;
import com.example.demo.service.StationService;
import com.example.demo.service.TripService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.lang.model.util.Elements;
import java.util.List;

@RestController
@RequestMapping(path = "")
@CrossOrigin(origins = "*")

public class Controller {
    private TripService tripService;
    private StationService stationService;
    private AdminService adminService;

    public Controller(TripService tripService, StationService stationService, AdminService adminService) {

        this.tripService = tripService;
        this.stationService = stationService;
        this.adminService = adminService;
    }

    @PostMapping("/signup")
    public void signUp(@RequestBody Admin admin){
        this.adminService.signUp(admin);
    }

    @PostMapping("/signin")
    public ResponseEntity<Admin> signIn(@RequestBody Admin admin){
        return adminService.signIn(admin);
    }

    @GetMapping("/getAdmin")
    public List<Admin> getAdmins(){
        return adminService.getAdmins();
    }

    @PostMapping("/addTrip")
    public void addTrip(@RequestBody Trip trip){

        this.tripService.addTrip(trip);
    }

    @GetMapping("/getTrip")
    public List<Trip> getTrips(){
        return tripService.getTrips();
    }

    @PutMapping(path="/updateTrip/{tripId}")
    public void updateTrip(@PathVariable("tripId") int tripId,
                           @RequestParam(required = false) String toStation,
                           @RequestParam(required = false) String fromStation){
        tripService.updateTrip(tripId,toStation,fromStation);
    }

    @DeleteMapping(path = "/deleteTrip/{tripId}")
    public void deleteTrip(@PathVariable("tripId") int tripId){
        tripService.deleteTrip(tripId);
    }

    @PostMapping("/addStation")
    public void addTrip(@RequestBody Station station){

        this.stationService.addStation(station);
    }

    @GetMapping("/getStation")
    public List<Station> getStation(){

        return stationService.getStations();
    }
    @PutMapping(path="/updateStation/{stationId}")
    public void updateStation(@PathVariable("stationId") int stationId,
                              @RequestParam(required = false) String name){
        stationService.updateStation(stationId,name);

    }

    @DeleteMapping(path = "/deleteStation/{stationId}")
    public void deleteStation(@PathVariable("stationId") int stationId){
        stationService.deleteStation(stationId);
    }

}