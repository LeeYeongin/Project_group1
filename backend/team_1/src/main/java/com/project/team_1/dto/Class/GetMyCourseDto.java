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
public class GetMyCourseDto {

	private String img;
	private String className;

	public GetMyCourseDto(ClassEntity classEntity) {
		this.img = classEntity.getImg();
		this.className = classEntity.getClassName();
	}

}
