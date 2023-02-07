package com.project.team_1.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.project.team_1.entity.OrderDtlEntity;


@Repository
public interface OrderDtlRepository extends JpaRepository<OrderDtlEntity, Integer>{
//	@Query("select od as OrderDtl")
	List<OrderDtlEntity>findByOrderNumber(String orderNumber);
	
}
