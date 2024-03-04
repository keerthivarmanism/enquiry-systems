package com.enquiry.system.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.enquiry.system.Model.UserInfo;

import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserInfo, Integer> {
    Optional<UserInfo> findByName(String username);

}
