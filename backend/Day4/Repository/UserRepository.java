package com.enquiry.system.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.enquiry.system.Model.user;

public interface UserRepository extends JpaRepository<user, Long> {

}