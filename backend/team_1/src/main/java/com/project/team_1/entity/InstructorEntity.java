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
@Entity(name="instructor")
@Table(name="instructor")
public class InstructorEntity {
	@Id
	private int idInstructor;
	private String InstructorName;
	private String InstructorInfo;
	private String InstructorImg;
}
