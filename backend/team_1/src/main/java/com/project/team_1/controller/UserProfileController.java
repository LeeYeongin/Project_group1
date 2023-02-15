package com.project.team_1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.MyPage.GetUserIfnoDto;
import com.project.team_1.dto.MyPage.GetUserPostingDto;
import com.project.team_1.dto.MyPage.UserIdDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.service.UserProfileService;

@RestController
@RequestMapping("/myProfile")
public class UserProfileController {
	@Autowired 
	UserProfileService userService;
	
//	@PostMapping("")
//	public ResponseDto<GetUserIfnoDto> getUserProfile(@RequestBody UserIdDto requestBody) {
//		return userService.getUserProfile(requestBody);
//	}
	
	@GetMapping("")
	public ResponseDto<GetUserIfnoDto> getUserProfile(@AuthenticationPrincipal String userId) {
		return userService.getUserProfile(userId);
	}
	
	@GetMapping("/writed")
	public ResponseDto<List<GetUserPostingDto>> getUserPosting(@AuthenticationPrincipal String idUser) {
		return userService.getUserPosting(idUser);
	}
}
