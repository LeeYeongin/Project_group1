package com.project.team_1.dto.orderList;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ClassNameDto {
	private int idClass;
	private String img;
	private String className;
	
//	public ClassNameDto(ClassNameDto classname) {
//		this.idClass = classname.getIdClass();
//		this.img = classname.getImg();
//		this.className = classname.getClassName();
//	}
}
