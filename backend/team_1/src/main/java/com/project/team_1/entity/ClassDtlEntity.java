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
@Entity(name="CLASSDTL")
@Table(name="CLASS_DTL")
public class ClassDtlEntity {
	
	@Id
	private int idClass;
	private String img;
	private String className;
	private int price;
	private String studentCount;
	private String classInfoSimple;
	private String classInfoDtl;
	private String category;
	private String difficulty;
	private int discountRate;

}
