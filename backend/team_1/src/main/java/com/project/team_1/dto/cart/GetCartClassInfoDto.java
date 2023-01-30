package com.project.team_1.dto.cart;

import com.project.team_1.entity.ClassEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetCartClassInfoDto {

	private String img;
	private String className;
	private int price;
	private String instructor;
	
	public GetCartClassInfoDto(ClassEntity classEntity) {
		this.img = classEntity.getImg();
		this.className = classEntity.getClassName();
		this.price = classEntity.getPrice();
		this.instructor = classEntity.getInstructor();
	}
	
}
