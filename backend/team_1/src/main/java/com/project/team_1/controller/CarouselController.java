package com.project.team_1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.Class.GetClassInfoDto;


import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.service.ClassService;

@RestController
@RequestMapping("main/")
public class CarouselController {
	
	@Autowired ClassService classService;
	
	@GetMapping("front")
	public ResponseDto<List<GetClassInfoDto>>getShowFrontList(){
		return classService.showFrontList();
	}
	
	@GetMapping("back")
	public ResponseDto<List<GetClassInfoDto>>getShowBackList(){
		return classService.showBackList();
	}
	
	@GetMapping("db")
	public ResponseDto<List<GetClassInfoDto>>getShowDatabaseList(){
		return classService.showDatabaseList();
	}

	@GetMapping("full")
	public ResponseDto<List<GetClassInfoDto>>getShowFullStackList(){
		return classService.showFullStackList();
	}

	

}
