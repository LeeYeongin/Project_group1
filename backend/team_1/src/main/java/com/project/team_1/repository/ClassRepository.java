package com.project.team_1.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.team_1.entity.ClassEntity;

@Repository
public interface ClassRepository extends JpaRepository<ClassEntity, Integer> {
	
//	@Query("select c from CLASS c where c.category = front")
//	List<ClassEntity> showFrontList();
	List<ClassEntity> findFirst5ByCategory(String category);
	
	List<ClassEntity> findByClassNameContaining(String search);
	
	List<ClassEntity> findByCategory(String category);
	
	List<ClassEntity> findByDifficulty(String difficulty);
	
	List<ClassEntity> findByDiscountRate(int discountRate);
	
	@Query("select c from CLASS c where c.idClass = ?1")
	List<ClassEntity> findAllDetail(int idClass);
	
	List<ClassEntity> findAll();
	
	List<ClassEntity> findByCategoryAndDifficulty(String category, String difficulty);
	
	List<ClassEntity> findByDiscountRateNot(int discountRate);
	
	List<ClassEntity> findByDiscountRateNotAndDifficulty(int discountRate, String difficulty);
	
	List<ClassEntity> findByDiscountRateNotAndCategory(int discountRate, String Category);
	
	List<ClassEntity> findByDiscountRateNotAndCategoryAndDifficulty(int discountRate, String Category, String difficulty);
	
	List<ClassEntity> findByClassName(String className);
}
