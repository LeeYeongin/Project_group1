package com.project.team_1.dto.SignIn;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class SignInDto {
	@NotBlank
	private String id;
	@NotBlank
	private String password;
}
