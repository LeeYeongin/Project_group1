package com.project.team_1.dto.MyPage;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SetUserDto {
	private String profile;
	private String name;
	private String nickname;
	private String email;
	private String password;
	private String telNum;
	private String description;
}
