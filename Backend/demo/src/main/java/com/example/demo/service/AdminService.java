package com.example.demo.service;

import com.example.demo.entity.Admin;
import com.example.demo.repository.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class AdminService {
    private final AdminRepo adminRepo;

    @Autowired
    public AdminService(AdminRepo adminRepo) {
        this.adminRepo = adminRepo;
    }

    public void signUp(Admin admin) {
        adminRepo.save(admin);
    }

    public ResponseEntity<Admin> signIn(Admin admin){
        boolean flag=false;

        for(int i=0;i < adminRepo.findAll().size();i++) {
            if (adminRepo.findAll().get(i).getUserName().equals(admin.getUserName()) &&
                    adminRepo.findAll().get(i).getPassword().equals(admin.getPassword())) {
                flag = true;
            }
        }
        if(flag==true) return ResponseEntity.ok(admin);
        else return (ResponseEntity<Admin>)ResponseEntity.internalServerError();
    }
    public List<Admin> getAdmins(){
        return adminRepo.findAll();
    }
 }