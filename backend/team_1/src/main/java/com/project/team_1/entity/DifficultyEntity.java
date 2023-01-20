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
@Entity(name="DIFFICULTY")
@Table(name="DIFFICULTY")
public class DifficultyEntity {

	@Id
	private int idDifficulty;
	private String difficultyNmae;
}
