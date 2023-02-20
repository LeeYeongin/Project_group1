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
	private int idClass;

	public GetCartClassInfoDto(ClassEntity classEntity, String instructor) {
		this.img = classEntity.getImg();
		this.className = classEntity.getClassName();
		this.price = classEntity.getPrice();
		this.instructor = instructor;
		this.idClass = classEntity.getIdClass();
	}

}
