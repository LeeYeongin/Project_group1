package com.project.team_1.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.team_1.entity.ReviewEntity;

@Repository
public interface ReviewRepository extends JpaRepository<ReviewEntity, Integer>{
	
	@Query("select r from review r where r.idClass = ?1")
	List<ReviewEntity> findAllReview(int idClass);
	
	@Query("select r from review r where r.idClass = ?1")
	List<ReviewEntity> findByIdClass(int idClass);

}
