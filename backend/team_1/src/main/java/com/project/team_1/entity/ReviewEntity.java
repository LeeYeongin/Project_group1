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
@Entity(name="REVIEW")
@Table(name="REVIEW")
public class ReviewEntity {
	
	@Id
	private int idReview;
	private String idUser;
	private String contents;
	private int idClass;
	private int grade;

}
