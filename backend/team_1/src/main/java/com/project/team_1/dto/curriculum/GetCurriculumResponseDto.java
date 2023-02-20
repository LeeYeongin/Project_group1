package com.project.team_1.dto.curriculum;

import com.project.team_1.entity.CurriculumEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetCurriculumResponseDto {
	private int idCurriculum;
	private String section;
	private String part;
	private String video;
	private int idClass;

	public GetCurriculumResponseDto(CurriculumEntity curriculum) {
		this.idCurriculum = curriculum.getIdCurriculum();
		this.section = curriculum.getSection();
		this.part = curriculum.getPart();
		this.video = curriculum.getVideo();
		this.idClass = curriculum.getIdClass();
	}
}
