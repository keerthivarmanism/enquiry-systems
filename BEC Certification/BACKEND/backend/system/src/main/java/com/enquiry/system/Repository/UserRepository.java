package com.enquiry.system.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.enquiry.system.Model.user;
@Repository
public interface UserRepository extends JpaRepository<user, Long> {

}