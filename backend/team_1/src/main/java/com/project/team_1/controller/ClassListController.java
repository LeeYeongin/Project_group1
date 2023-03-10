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
import com.project.team_1.dto.Class.GetCategoryDto;
import com.project.team_1.dto.Class.GetClassInfoDto;
import com.project.team_1.dto.Class.GetDifficultyClassListDto;
import com.project.team_1.dto.Class.GetDiscountRateClassListDto;

import com.project.team_1.dto.cart.GetCartClassListDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.service.ClassService;
import com.project.team_1.service.CurriculumService;

@RestController
@RequestMapping("/api/list/")
public class ClassListController {

	@Autowired
	ClassService classService;

	@GetMapping("{search}")
	public ResponseDto<List<GetClassInfoDto>> getSearchClass(@PathVariable("search") String search) {
		return classService.SearchClassList(search);
	}

	@PostMapping("")
	public ResponseDto<List<GetClassInfoDto>> getCategoryClassList(@RequestBody GetCategoryClassListDto requestBody) {
		return classService.getCategoryClassList(requestBody);
	}

	@GetMapping("show/{getcategory}")
	public ResponseDto<List<GetClassInfoDto>> showClassList(@PathVariable("getcategory") String getcategory) {
		return classService.showClassList(getcategory);
	}
	@PostMapping("all")
	public ResponseDto<List<GetClassInfoDto>> getAllCategoryClassList(@RequestBody GetClassInfoDto requestBody) {
		return classService.showAllClassList();
	}

	@PostMapping("difficulty")
	public ResponseDto<List<GetClassInfoDto>> getDifficultyClassList(
			@RequestBody GetDifficultyClassListDto requestBody) {
		return classService.getDifficultyClassList(requestBody);
	}

	@PostMapping("discountRate")
	public ResponseDto<List<GetClassInfoDto>> getDiscountRateClassList(
			@RequestBody GetDiscountRateClassListDto requestBody) {
		return classService.getDiscountClassList(requestBody);
	}

	@PostMapping("category")
	public ResponseDto<List<GetClassInfoDto>> getSubcategoryClassList(@RequestBody GetCategoryDto requsetBody) {
		return classService.getSubcategoryClassList(requsetBody);
	}

	@PostMapping("back")
	public ResponseDto<List<GetClassInfoDto>> getCategoryClassList1(@RequestBody GetCategoryClassListDto requestBody) {
		return classService.getCategoryClassList(requestBody);
	}

}
