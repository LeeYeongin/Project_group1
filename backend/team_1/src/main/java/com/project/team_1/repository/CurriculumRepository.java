package com.project.team_1.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.team_1.entity.CurriculumEntity;

@Repository
public interface CurriculumRepository extends JpaRepository<CurriculumEntity, Integer> {

	@Query("select distinct section from CURRICULUM c where c.idClass = ?1 order by section")
	List<String> findAllSection(int idClass);

	@Query("select c from CURRICULUM c where c.idClass = ?1")
	List<CurriculumEntity> findAllCurriculum(int idClass);
}

//강의(강의ID, ~~)
//커리큘럼(커리큘럼ID[PK}, 섹션, 파트, 강의ID[PK])
//
//Select distinct 센션 from 커리큘럼
//where 강의ID = ? order by 섹션
//=> 섹션값만 가져오기
//
//select * from 커리큘럼 where 강의ID =? => 강의ID와 일치하는 커리큘럼 가져오기
//and 섹션 = ?