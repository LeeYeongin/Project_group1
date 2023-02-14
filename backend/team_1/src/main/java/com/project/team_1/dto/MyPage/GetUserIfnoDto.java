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
	private String userId;
	private String profile;
	private String nickname;
	private String name;
	private String email;
	private String password;
	private String telNum;
	private String description;
	
	public GetUserIfnoDto(UserEntity user) {
		this.userId = user.getIdUser();
		this.profile = user.getProfile();
		this.nickname = user.getNickname();
		this.name = user.getName();
		this.email = user.getEmail();
		this.password = user.getPassword();
		this.telNum = user.getTelnum();
		this.description = user.getDescription();
	}
}
