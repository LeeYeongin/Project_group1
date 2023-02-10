package com.project.team_1.entity;


import javax.persistence.Column;
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
@Entity(name="CLASS")
@Table(name="CLASS")
public class ClassEntity {
	
	@Id
	private int idClass;
	private String img;
	private String className;
	private int price;
	private int studentCount;
	private String classInfoSimple;
	private String classInfoDtl;
	private String category;
	private String difficulty;
	@Column
	private Integer discountRate;
	private int instructor;
	
	
	

}
