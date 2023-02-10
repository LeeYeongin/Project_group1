package com.project.team_1.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.team_1.entity.InstructorEntity;

@Repository
public interface InstructorRepository extends JpaRepository<InstructorEntity, Integer>{
	
	List<InstructorEntity> findByIdInstructor(int idInstructor);
	
}
