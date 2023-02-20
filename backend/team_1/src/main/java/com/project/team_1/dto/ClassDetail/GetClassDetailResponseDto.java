package com.project.team_1.dto.ClassDetail;

import java.util.List;

import com.project.team_1.entity.ClassEntity;
import com.project.team_1.entity.CurriculumEntity;
import com.project.team_1.entity.InstructorEntity;
import com.project.team_1.entity.ReviewEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetClassDetailResponseDto {

	private int idClass;
	private String img;
	private String className;
	private String classInfoSimple;
	private String classInfoDtl;
	private int price;
	private String category;
	private String difficulty;
	private List<InstructorEntity> instructor;
	private List<CurriculumEntity> curriculumList;
	private List<ReviewEntity> reviewList;

	public GetClassDetailResponseDto(ClassEntity classEntity, List<CurriculumEntity> curriculumList,
			List<ReviewEntity> reviewList, List<InstructorEntity> instructor) {
		this.idClass = classEntity.getIdClass();
		this.img = classEntity.getImg();
		this.className = classEntity.getClassName();
		this.instructor = instructor;
		this.classInfoSimple = classEntity.getClassInfoSimple();
		this.price = classEntity.getPrice();
		this.classInfoDtl = classEntity.getClassInfoDtl();
		this.category = classEntity.getCategory();
		this.difficulty = classEntity.getDifficulty();
		this.curriculumList = curriculumList;
		this.reviewList = reviewList;
	}
}
