package com.enquiry.system.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.enquiry.system.Model.admin;

@Repository
public interface AdminRepository extends JpaRepository<admin,Long> {

    

    
}
