package com.enquiry.system;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.enquiry.system.Repository.EnableOpenApi;

@SpringBootApplication
@EnableOpenApi
public class SystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(SystemApplication.class, args);
	}

}
