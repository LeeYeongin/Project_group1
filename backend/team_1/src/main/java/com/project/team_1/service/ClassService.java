package com.project.team_1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
		List<ClassEntity> showFrontList = classRepository.showFrontList();
		List<GetShowFrontListResponseDto> data = new ArrayList<GetShowFrontListResponseDto>();
		for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : showFrontList) {
			data.add(new GetShowFrontListResponseDto(classEntity));
		}
		return ResponseDto.setSuccess("getFrontCarousel", data);
	}

	// BackEnd List
	public ResponseDto<List<GetShowBackListResponseDto>> showBackList() {
		List<ClassEntity> showBackList = classRepository.showBackList();
		List<GetShowBackListResponseDto> data = new ArrayList<GetShowBackListResponseDto>();
		for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : showBackList) {
			data.add(new GetShowBackListResponseDto(classEntity));
		}
		return ResponseDto.setSuccess("getBackCarousel", data);
	}

	// Database List
	public ResponseDto<List<GetShowDatabaseListResponseDto>> showDatabaseList() {
		List<ClassEntity> showDatabaseList = classRepository.showDatabaseList();
		List<GetShowDatabaseListResponseDto> data = new ArrayList<GetShowDatabaseListResponseDto>();
		for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : showDatabaseList) {
			data.add(new GetShowDatabaseListResponseDto(classEntity));
		}
		return ResponseDto.setSuccess("getDatabaseCarousel", data);
	}

	// FullStack List
	public ResponseDto<List<GetShowFullStackListResponseDto>> showFullStackList() {
		List<ClassEntity> showFullStackList = classRepository.showFullStackList();
		List<GetShowFullStackListResponseDto> data = new ArrayList<GetShowFullStackListResponseDto>();
		for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : showFullStackList) {
			data.add(new GetShowFullStackListResponseDto(classEntity));
		}
		return ResponseDto.setSuccess("getFullStackCarousel", data);
	}
}
