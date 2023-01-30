package com.project.team_1.dto.ClassDetail;

import java.util.List;

import com.project.team_1.entity.ClassEntity;
import com.project.team_1.entity.CurriculumEntity;
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
	private String instructor;
	private int price;
	private String category;
	private List<CurriculumEntity> curriculumList;
	private List<ReviewEntity> reviewList;
	
	public GetClassDetailResponseDto(ClassEntity classEntity, List<CurriculumEntity> curriculumList, List<ReviewEntity> reviewList) {
		this.idClass = classEntity.getIdClass();
		this.img = classEntity.getImg();
		this.className = classEntity.getClassName();
		this.instructor = classEntity.getInstructor();
		this.price = classEntity.getPrice();
		this.category = classEntity.getCategory();
		this.curriculumList = curriculumList;
		this.reviewList	= reviewList;
	}
}
