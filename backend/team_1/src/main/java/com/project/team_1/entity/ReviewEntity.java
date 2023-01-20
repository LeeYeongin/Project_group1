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
@Entity(name="review")
@Table(name="review")
public class ReviewEntity {
	
	@Id
	private int idReview;
	private String title;
	private String idUser;
	private String contents;
	private String idClass;
	private float grade;

}
