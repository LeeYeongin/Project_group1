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
public class GetClassInfoDto {
	
	private int idClass;
	private String img;
	private String className;
	private int instructor;
	private int price;
	private int discountRate;
	private int studentCount;
	private int grade;
	
	public GetClassInfoDto(ClassEntity classEntity, int grade) {
		this.idClass = classEntity.getIdClass();
		this.img = classEntity.getImg();
		this.className = classEntity.getClassName();
		this.instructor = classEntity.getInstructor();
		this.price = classEntity.getPrice();
		this.discountRate = classEntity.getDiscountRate();
		this.studentCount = classEntity.getStudentCount();
		this.grade = grade;
	}
	
}
