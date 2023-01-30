package com.project.team_1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.Class.GetShowBackListResponseDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.service.ClassService;

@RestController
@RequestMapping("main/")
public class BackCarouselController {
	
	@Autowired ClassService classService;
	

	@GetMapping("back")
	public ResponseDto<List<GetShowBackListResponseDto>>getShowBackList(){
		return classService.showBackList();
	}
	

}
