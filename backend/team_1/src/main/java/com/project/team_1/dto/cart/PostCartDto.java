package com.project.team_1.dto.cart;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostCartDto {
	
	private int idCart;
	private String idUser;
	private int idClass;
}

