package com.project.team_1.dto.cart;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetCartClassListDto {
	private int idCart;
	GetCartClassInfoDto classInfo;
	
	
//	public GetCartClassListDto(int idCart, GetCartClassInfoDto classInfo) {
//		this.idCart = idCart;
//		this.classInfo = classInfo;
//	}
	
	
}
