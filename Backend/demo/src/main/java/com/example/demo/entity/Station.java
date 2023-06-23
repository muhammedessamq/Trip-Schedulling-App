package com.example.demo.entity;

import javax.persistence.*;

@Entity
@Table
public class Station {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int stationId;
    private String name;

    public int getStationId() {
        return stationId;
    }

    public void setStationId(int id) {
        this.stationId = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}