package com.example.demo.service;
import com.example.demo.entity.Trip;
import com.example.demo.repository.TripRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;
@Service
public class TripService {

    private final TripRepo tripRepo;

    @Autowired
    public TripService(TripRepo tripRepo) {
        this.tripRepo = tripRepo;
    }

    public void addTrip(Trip trip){

        tripRepo.save(trip);
    }

    public List<Trip> getTrips(){

        return tripRepo.findAll();
    }

    public void deleteTrip(int tripId) {
        boolean exists = tripRepo.existsById(tripId);
        if(!exists){
            throw new IllegalStateException("Trip with id "+tripId+" does not exist");
        }
        tripRepo.deleteById(tripId);
    }
    @Transactional
    public void updateTrip(int tripId, String toStation, String fromStation) {
        Trip trip = tripRepo.findById(tripId).
                orElseThrow(() -> new IllegalStateException("Trip with id "+tripId+" does not exist"));
        if(toStation!=null){
            trip.setToStation(toStation);
        }
        if(fromStation!=null){
            trip.setFromStation(fromStation);
        }
    }
}