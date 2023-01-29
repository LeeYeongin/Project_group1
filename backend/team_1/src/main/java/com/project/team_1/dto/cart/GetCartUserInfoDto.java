package com.project.team_1.dto.cart;

import com.project.team_1.entity.UserEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetCartUserInfoDto {
	private String name;
	private String email;
	private String telNum;
	
	public GetCartUserInfoDto(UserEntity user) {
		this.name = user.getName();
		this.email = user.getEmail();
		this.telNum = user.getTelnum();
	}
}
