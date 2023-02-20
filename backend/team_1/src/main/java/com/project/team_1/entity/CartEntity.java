package com.project.team_1.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
@Entity(name = "CART")
@Table(name = "CART")
public class CartEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idCart;
	private String idUser;
	private int idClass;

	public CartEntity(String idUser, int idClass) {
		this.idUser = idUser;
		this.idClass = idClass;
	}
}
