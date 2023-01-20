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
@Entity(name="CLASS_MST")
@Table(name="CLASSMST")
public class ClassMstEntity {

	@Id
	private int idClass;
	private int idCatrgory;
	private int idDifficulty;
	private int idInstructor;
	private int idDiscount;
}
