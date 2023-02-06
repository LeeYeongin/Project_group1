package com.project.team_1.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.team_1.entity.OrderMstEntity;

@Repository
public interface OrderMstRepository extends JpaRepository<OrderMstEntity, Integer>{
	
	List<OrderMstEntity> findByIdUser(String idUser);
}
