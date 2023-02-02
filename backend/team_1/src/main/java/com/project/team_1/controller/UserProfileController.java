package com.project.team_1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.MyPage.GetUserIfnoDto;
import com.project.team_1.dto.MyPage.UserIdDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.service.UserProfileService;

@RestController
@RequestMapping("/myProfile")
public class UserProfileController {
	@Autowired 
	UserProfileService userService;
	
	@PostMapping("")
	public ResponseDto<GetUserIfnoDto> getUserProfile(@RequestBody UserIdDto requestBody) {
		return userService.getUserProfile(requestBody);
	}
	
	

}
