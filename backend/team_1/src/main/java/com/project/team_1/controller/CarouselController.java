package com.project.team_1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.Class.GetClassInfoDto;
import com.project.team_1.dto.ClassDetail.GetClassDetailResponseDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.service.ClassDetailService;
import com.project.team_1.service.ClassService;

@RestController
@RequestMapping("/")
public class CarouselController {
	
	@Autowired ClassService classService;
	
	@Autowired ClassDetailService classDetailService;
	
	//Front
	
	@GetMapping("front")
	public ResponseDto<List<GetClassInfoDto>>getShowFrontList(){
		return classService.showFrontList();
	}
	
	@PostMapping("front")
	public ResponseDto<GetClassDetailResponseDto>getshowFrontList(@RequestBody GetClassDetailResponseDto requestBody) {
		System.out.println(requestBody.getIdClass());
		return classDetailService.readAllDetail(requestBody.getIdClass());
	}
	
	//Back

	
	@GetMapping("back")
	public ResponseDto<List<GetClassInfoDto>>getShowBackList(){
		return classService.showBackList();
	}
	
	@PostMapping("back")
	public ResponseDto<GetClassDetailResponseDto>getShowBackList(@RequestBody GetClassDetailResponseDto requestBody) {
		System.out.println(requestBody.getIdClass());
		return classDetailService.readAllDetail(requestBody.getIdClass());
	}
	
	//Database
	
	@GetMapping("db")
	public ResponseDto<List<GetClassInfoDto>>getShowDatabaseList(){
		return classService.showDatabaseList();
	}
	
	@PostMapping("db")
	public ResponseDto<GetClassDetailResponseDto>getShowDatabaseList(@RequestBody GetClassDetailResponseDto requestBody) {
		System.out.println(requestBody.getIdClass());
		return classDetailService.readAllDetail(requestBody.getIdClass());
	}

	
	//FullStack
	
	@GetMapping("full")
	public ResponseDto<List<GetClassInfoDto>>getShowFullStackList(){
		return classService.showFullStackList();
	}
	
	@PostMapping("full")
	public ResponseDto<GetClassDetailResponseDto>getShowFullStackList(@RequestBody GetClassDetailResponseDto requestBody) {
		System.out.println(requestBody.getIdClass());
		return classDetailService.readAllDetail(requestBody.getIdClass());
	}

	

	

}
