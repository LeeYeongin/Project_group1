package com.project.team_1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.SignIn.SignInDto;
import com.project.team_1.dto.Signup.SigninResponseDto;
import com.project.team_1.dto.Signup.SignupDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.service.AuthService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@Autowired
	AuthService authSeivce;

	@PostMapping("/signup")
	public ResponseDto<?> signUp(@RequestBody SignupDto requestBody) {
		ResponseDto<?> result = authSeivce.signUp(requestBody);
//			System.out.println(requestBody.toString());
		return result;
	}

	@PostMapping("/signIn")
	public ResponseDto<SigninResponseDto> sigIn(@RequestBody SignInDto requestBody) {
		ResponseDto<SigninResponseDto> result = authSeivce.signIn(requestBody);
		return result;
	}

}
