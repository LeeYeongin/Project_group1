package com.project.team_1.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
