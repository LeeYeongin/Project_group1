package com.project.team_1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.team_1.entity.ClassDtlEntity;
import com.project.team_1.entity.ClassMstEntity;

@Repository
public interface ClassMstRepository extends JpaRepository<ClassMstEntity, Integer> {

}
