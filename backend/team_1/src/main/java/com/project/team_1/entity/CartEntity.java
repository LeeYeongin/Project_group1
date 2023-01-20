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
@Entity(name="CART")
@Table(name="CART")
public class CartEntity {

	@Id
	private int id_cart;
	private String id_user;
	private int id_class;
}
