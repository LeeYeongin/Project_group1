package com.project.team_1.dto.Signup;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class SignupDto {
	private String id;
	private String password;
	private String passwordConfirm;
	private String name;
	private String telNum;
}
