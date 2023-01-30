package com.project.team_1.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.Class.GetCategoryClassListDto;
import com.project.team_1.dto.Class.GetCateoryClassListResponseDto;
import com.project.team_1.dto.Class.GetSearchClassResponseDto;
import com.project.team_1.dto.cart.GetCartClassListDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.service.ClassService;
import com.project.team_1.service.CurriculumService;

@RestController
@RequestMapping("list/")
public class ClassListController {

	@Autowired ClassService classService;
	
	@GetMapping("{search}")
	public ResponseDto<List<GetSearchClassResponseDto>> getSearchClass (@PathVariable("search") String search) {
		return  classService.SearchClassList(search);
	}
	
	@PostMapping("")
	public ResponseDto<List<GetCateoryClassListResponseDto>> getCategoryClassList(@RequestBody GetCategoryClassListDto requestBody){
		return classService.getCategoryClassList(requestBody);
	}
}
