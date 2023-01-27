package com.project.team_1.dto.cart;

import com.project.team_1.entity.CartEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetCartResponseDto {
	private String idUser;
	private int idClass;
	
	public GetCartResponseDto(CartEntity cart) {
		this.idUser = cart.getIdUser();
		this.idClass = cart.getIdCart();
	}
}
