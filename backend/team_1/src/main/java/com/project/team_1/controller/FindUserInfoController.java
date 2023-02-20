package com.project.team_1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.FindId.FindIdDto;
import com.project.team_1.dto.FindId.FindIdResponseDto;
import com.project.team_1.dto.FindPassword.ChangePasswordDto;
import com.project.team_1.dto.FindPassword.FindPasswordDto;
import com.project.team_1.dto.FindPassword.GetFindPasswordDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.service.FindUserInfoService;

@RestController
@RequestMapping("/api/find")
public class FindUserInfoController {

	@Autowired
	FindUserInfoService findUserInfoService;

	@PostMapping("/id")
	public ResponseDto<FindIdResponseDto> Id(@RequestBody FindIdDto requestBody) {
		ResponseDto<FindIdResponseDto> result = findUserInfoService.FindId(requestBody);
		return result;
	}

	@PostMapping("/password")
	public ResponseDto<FindPasswordDto> getPassword(@RequestBody GetFindPasswordDto requestBody) {
		return findUserInfoService.getPassword(requestBody);
	}

	@PatchMapping("/changePassword")
	public ResponseDto<FindPasswordDto> changPassword(@RequestBody ChangePasswordDto requestBody) {
		return findUserInfoService.changePassword(requestBody);
	}
}
