package com.project.team_1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.MyPage.GetUserIfnoDto;
import com.project.team_1.dto.MyPage.SetUserDto;
import com.project.team_1.dto.MyPage.UserIdDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.dto.response.ResultResponseDTO;
import com.project.team_1.service.UserProfileService;

@RestController
@RequestMapping("/modifiyProfile")
public class ModifiyProfileController {
	@Autowired
	UserProfileService userService;
	
	@GetMapping("")
	public ResponseDto<GetUserIfnoDto> getUserProfile(@AuthenticationPrincipal String userId) {
		return userService.getUserProfile(userId);
	}
	
	@GetMapping("/delete")
	public ResponseDto<ResultResponseDTO> deleteUser(@AuthenticationPrincipal String idUser){
		return userService.deleteUser(idUser);
	}
	
	@PatchMapping("")
	public ResponseDto<GetUserIfnoDto> setUserProfile(@RequestBody SetUserDto requestBody, @AuthenticationPrincipal String userId) {
		return userService.setUserProfile(requestBody);
	}
	
	
}
