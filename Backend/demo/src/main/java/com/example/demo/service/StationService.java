package com.example.demo.service;
import com.example.demo.entity.Station;
import com.example.demo.repository.StationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;
@Service
public class StationService {

    private final StationRepo stationRepo;

    @Autowired
    public StationService(StationRepo stationRepo) {
        this.stationRepo = stationRepo;
    }

    public List<Station> getStations(){
        return stationRepo.findAll();
    }

    public void addStation(Station station){
        stationRepo.save(station);
    }

    public void deleteStation(int stationId) {
        boolean exists = stationRepo.existsById(stationId);
        if(!exists){
            throw new IllegalStateException("Station with id "+stationId+" does not exist");
        }
        stationRepo.deleteById(stationId);
    }

    @Transactional
    public void updateStation(int stationId, String name) {
        Station station = stationRepo.findById(stationId).
                orElseThrow(() -> new IllegalStateException("Station with id "+stationId+" does not exist"));
        if(name!=null){
            station.setName(name);
        }
    }
}
