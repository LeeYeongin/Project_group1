package com.project.team_1.dto.Class;

import com.project.team_1.entity.ClassEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetShowFrontListResponseDto {
	
	private String img;
	private String className;
	private String instructor;
	private int price;
	private int discountRate;
	private int studentCount;
	
	public GetShowFrontListResponseDto(ClassEntity classEntity) {
		this.img = classEntity.getImg();
		this.className = classEntity.getClassName();
		this.instructor = classEntity.getInstructor();
		this.price = classEntity.getPrice();
		this.discountRate = classEntity.getDiscountRate();
		this.studentCount = classEntity.getStudentCount();
	}
}
