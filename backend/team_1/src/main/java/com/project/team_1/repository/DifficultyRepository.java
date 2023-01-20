package com.project.team_1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.team_1.entity.DifficultyEntity;

@Repository
public interface DifficultyRepository extends JpaRepository<DifficultyEntity, Integer> {

}
