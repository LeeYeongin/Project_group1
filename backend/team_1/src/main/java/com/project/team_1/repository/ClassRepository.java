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
	
//	@Query("select c from CLASS c like *?1*")
//	List<ClassEntity> searchClassList(String search);
//	
//	@Query("select c from CLASS c where c.category = ?1")
//	List<ClassEntity> categoryClassList(String category);
}
