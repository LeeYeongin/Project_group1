package com.project.team_1.dto.MyPage;

import com.project.team_1.entity.UserEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetUserIfnoDto {
	private String img;
	private String nickName;
	private String email;
	private String description;
	
	public GetUserIfnoDto(UserEntity user) {
		this.img = user.getProfile();
		this.nickName = user.getNickname();
		this.email = user.getEmail();
		this.description = user.getDescription();
	}
}
