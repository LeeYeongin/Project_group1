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
@RequestMapping("list/")
public class ClassListController {

	@Autowired ClassService classService;
	

	@GetMapping("{search}")
	public ResponseDto<List<GetClassInfoDto>> getSearchClass (@PathVariable("search") String search) {
		return  classService.SearchClassList(search);
	}
	
	@PostMapping("")
	public ResponseDto<List<GetClassInfoDto>> getCategoryClassList(@RequestBody GetCategoryClassListDto requestBody){
		return classService.getCategoryClassList(requestBody);
	}
	
//	@PostMapping("back")
//	public ResponseDto<List<GetClassInfoDto>> getCategoryClassList1(@RequestBody GetCategoryClassListDto requestBody){
//		return classService.getCategoryClassList(requestBody);
//	}
	
	//Header 목록에서 database Read
	@GetMapping("front")
	public ResponseDto<List<GetClassInfoDto>> showAllFrontClassList(){
		return classService.showAllFrontClassList();
	}
	
	@GetMapping("back")
	public ResponseDto<List<GetClassInfoDto>> showAllBackClassList(){
		return classService.showAllBackClassList();
	}
	
	@GetMapping("db")
	public ResponseDto<List<GetClassInfoDto>> showAllDatabaseClassList(){
		return classService. showAllDatabaseClassList();
	}
	
	@GetMapping("full")
	public ResponseDto<List<GetClassInfoDto>> showAllFullStackClassList(){
		return classService. showAllFullStackClassList();
	}

	
	
	@GetMapping("all")
	public ResponseDto<List<GetClassInfoDto>> getAllCategoryClassList(){
		return classService.showAllClassList();
	}
	
	@PostMapping("all")
	public ResponseDto<List<GetClassInfoDto>> getAllCategoryClassList(@RequestBody GetClassInfoDto requestBody){
//		System.out.println(requestBody);
		return classService.showAllClassList();
	}
	
	@PostMapping("difficulty")
	public ResponseDto<List<GetClassInfoDto>> getDifficultyClassList(@RequestBody GetDifficultyClassListDto requestBody){
		return classService.getDifficultyClassList(requestBody);
	}
	
	@PostMapping("discountRate")
	public ResponseDto<List<GetClassInfoDto>> getDiscountRateClassList(@RequestBody GetDiscountRateClassListDto requestBody){
		return classService.getDiscountClassList(requestBody);
	}
	
	@PostMapping("category")
	public ResponseDto<List<GetClassInfoDto>> getSubcategoryClassList(@RequestBody GetCategoryDto requsetBody){
		return classService.getSubcategoryClassList(requsetBody);
	}
	
	
}
