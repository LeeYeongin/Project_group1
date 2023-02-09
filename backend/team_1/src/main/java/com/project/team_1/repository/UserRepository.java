package com.project.team_1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.team_1.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, String> {
	
	public boolean existsByUserIdAndPassword(String UserId, String password);
	
	UserEntity findByName(String name);
	
	public UserEntity findByUserId(String userId); 
	//********************************************
}
