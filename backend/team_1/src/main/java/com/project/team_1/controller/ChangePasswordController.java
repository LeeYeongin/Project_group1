package com.project.team_1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.service.LoginService;

@RestController
@RequestMapping("changePassword/")
public class ChangePasswordController {

	@Autowired LoginService loginService;
	
	@PostMapping("")
	public ResponseDto<D>
}
