package com.project.team_1.dto.Signup;

import com.project.team_1.entity.UserEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class SigninResponseDto {
	private String token;
	private int exprTime;
	private UserEntity user;
}
