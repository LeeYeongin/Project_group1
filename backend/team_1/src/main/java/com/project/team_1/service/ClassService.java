package com.project.team_1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.team_1.dto.Class.GetCategoryClassListDto;
import com.project.team_1.dto.Class.GetCateoryClassListResponseDto;
import com.project.team_1.dto.Class.GetSearchClassResponseDto;
import com.project.team_1.dto.Class.GetShowBackListResponseDto;
import com.project.team_1.dto.Class.GetShowDatabaseListResponseDto;
import com.project.team_1.dto.Class.GetShowFrontListResponseDto;
import com.project.team_1.dto.Class.GetShowFullStackListResponseDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.entity.ClassEntity;
import com.project.team_1.repository.ClassRepository;

@Service
public class ClassService {

	@Autowired
	ClassRepository classRepository;

	// FrontEnd List
	public ResponseDto<List<GetShowFrontListResponseDto>> showFrontList() {
		String category = "front";
		List<ClassEntity> showFrontList = classRepository.findFirst5ByCategory(category);
		List<GetShowFrontListResponseDto> data = new ArrayList<GetShowFrontListResponseDto>();
		for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : showFrontList) {
			data.add(new GetShowFrontListResponseDto(classEntity));
		}
		return ResponseDto.setSuccess("getFrontCarousel", data);	
	}

	// BackEnd List
	public ResponseDto<List<GetShowBackListResponseDto>> showBackList() {
		String category = "back";
		List<ClassEntity> showBackList = classRepository.findFirst5ByCategory(category);
		List<GetShowBackListResponseDto> data = new ArrayList<GetShowBackListResponseDto>();
		for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : showBackList) {
			data.add(new GetShowBackListResponseDto(classEntity));
		}
		return ResponseDto.setSuccess("getBackCarousel", data);
	}

	// Database List
	public ResponseDto<List<GetShowDatabaseListResponseDto>> showDatabaseList() {
		String category = "database";
		List<ClassEntity> showDatabaseList = classRepository.findFirst5ByCategory(category);
		List<GetShowDatabaseListResponseDto> data = new ArrayList<GetShowDatabaseListResponseDto>();
		for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : showDatabaseList) {
			data.add(new GetShowDatabaseListResponseDto(classEntity));
		}
		return ResponseDto.setSuccess("getDatabaseCarousel", data);
	}

	// FullStack List
	public ResponseDto<List<GetShowFullStackListResponseDto>> showFullStackList() {
		String category = "fullstack";
		List<ClassEntity> showFullStackList = classRepository.findFirst5ByCategory(category);
		List<GetShowFullStackListResponseDto> data = new ArrayList<GetShowFullStackListResponseDto>();
		for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : showFullStackList) {
			data.add(new GetShowFullStackListResponseDto(classEntity));
		}
		return ResponseDto.setSuccess("getFullStackCarousel", data);
	}
	
	
	// searchClass List
		public ResponseDto<List<GetSearchClassResponseDto>> SearchClassList(String search) {
			List<ClassEntity> searchClassList = classRepository.findByClassNameContaining(search);
			List<GetSearchClassResponseDto> data = new ArrayList<GetSearchClassResponseDto>();
			for(ClassEntity classEntity: searchClassList) {
				data.add(new GetSearchClassResponseDto(classEntity));
			}
			return ResponseDto.setSuccess("success", data);
		}
		
		// categoryClass List
		public ResponseDto<List<GetCateoryClassListResponseDto>> getCategoryClassList(GetCategoryClassListDto dto){
			List<ClassEntity> getCategoryClassList = classRepository.findByCategory(dto.getCategory());
			List<GetCateoryClassListResponseDto> data = new ArrayList<GetCateoryClassListResponseDto>();
			for(ClassEntity classEntity: getCategoryClassList) {
				data.add(new GetCateoryClassListResponseDto(classEntity));
			}
			return ResponseDto.setSuccess("success", data);
		}

}
