package com.project.team_1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.FindPassword.FindPasswordDto;
import com.project.team_1.dto.FindPassword.GetFindPasswordDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.service.LoginService;

@RestController
@RequestMapping("findPassword/")
public class LoginController {

	 @Autowired LoginService loginService;
	   
	   @PostMapping("")
	   public ResponseDto<FindPasswordDto> getPassword(@RequestBody GetFindPasswordDto requestBody){
	      return loginService.getPassword(requestBody);
	   }

}
