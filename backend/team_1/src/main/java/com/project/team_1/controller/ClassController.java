package com.project.team_1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.Class.GetShowBackListResponseDto;
import com.project.team_1.dto.Class.GetShowDatabaseListResponseDto;
import com.project.team_1.dto.Class.GetShowFrontListResponseDto;
import com.project.team_1.dto.Class.GetShowFullStackListResponseDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.service.ClassService;

@RestController
@RequestMapping("main/")
public class ClassController {
	
	@Autowired ClassService classService;
	
	@GetMapping("")
	public ResponseDto<List<GetShowFrontListResponseDto>>getShowFrontList(){
		return classService.showFrontList();
	}
	
	@GetMapping("")
	public ResponseDto<List<GetShowBackListResponseDto>>getShowBackList(){
		return classService.showBackList();
	}
	@GetMapping("")
	public ResponseDto<List<GetShowDatabaseListResponseDto>>getShowDatabaseList(){
		return classService.showDatabaseList();
	}
	@GetMapping("")
	public ResponseDto<List<GetShowFullStackListResponseDto>>getShowFullStackList(){
		return classService.showFullStackList();
	}
}
