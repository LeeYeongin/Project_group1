package com.project.team_1.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="CURRICULUM")
@Table(name="CURRICULUM")
public class CurriculumEntity {

	@Id
	private int idCurriculum;
	private String section;
	private String part;
	private String video;
	private int idClass;
}
