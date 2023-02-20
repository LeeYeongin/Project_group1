package com.project.team_1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.team_1.dto.ClassDetail.GetClassDetailResponseDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.entity.ClassEntity;
import com.project.team_1.entity.CurriculumEntity;
import com.project.team_1.entity.InstructorEntity;
import com.project.team_1.entity.ReviewEntity;
import com.project.team_1.repository.ClassRepository;
import com.project.team_1.repository.CurriculumRepository;
import com.project.team_1.repository.InstructorRepository;
import com.project.team_1.repository.ReviewRepository;

@Service
public class ClassDetailService {
	@Autowired
	ClassRepository classRepo;
	@Autowired
	CurriculumRepository curriRepo;
	@Autowired
	ReviewRepository reviewRepo;
	@Autowired
	InstructorRepository instructRepo;

	public ResponseDto<GetClassDetailResponseDto> readAllDetail(int idClass) {

		ClassEntity classEntity;

		try {
			classEntity = classRepo.findById(idClass).get();
		} catch (Exception e) {
			return ResponseDto.setFailed("강의 출력 실패");
		}

		// 커리큘럼 가져오기
		List<CurriculumEntity> curriculumList = curriRepo.findAllCurriculum(idClass);
		// 리뷰 가져오기
		List<ReviewEntity> reviewList = reviewRepo.findByIdClass(idClass);

		List<InstructorEntity> instructor = instructRepo.findByIdInstructor(classEntity.getInstructor());

		GetClassDetailResponseDto responseData = GetClassDetailResponseDto.builder().idClass(idClass)
				.img(classEntity.getImg()).className(classEntity.getClassName()).instructor(instructor)
				.classInfoSimple(classEntity.getClassInfoSimple()).price(classEntity.getPrice())
				.classInfoDtl(classEntity.getClassInfoDtl()).category(classEntity.getCategory())
				.difficulty(classEntity.getDifficulty()).curriculumList(curriculumList).reviewList(reviewList).build();

		// 전체 출력
		return ResponseDto.setSuccess("강의 상세 출력", responseData);
	}
}
