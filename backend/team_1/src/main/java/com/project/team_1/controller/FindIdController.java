package com.project.team_1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.FindId.FindIdDto;
import com.project.team_1.dto.FindId.FindIdResponseDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.service.FindIdService;

@RestController
@RequestMapping("/api/find")
public class FindIdController {
	
	@Autowired
	FindIdService findIdService;
	
	@PostMapping("/id")
	public ResponseDto<FindIdResponseDto> Id(@RequestBody FindIdDto requestBody) {
		ResponseDto<FindIdResponseDto> result = findIdService.FindId(requestBody);
//			System.out.println(requestBody.toString());
		return result;
	}

	
}
