package com.project.team_1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.team_1.dto.curriculum.GetCurriculumResponseDto;
import com.project.team_1.dto.curriculum.GetCurriculumSectionDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.entity.CurriculumEntity;
import com.project.team_1.repository.CurriculumRepository;

@Service
public class CurriculumService {
	@Autowired
	CurriculumRepository curriculumRepository;
	
	 public ResponseDto<List<GetCurriculumSectionDto>> findAllSection(int idClass){
	      List<String> curriculumList = curriculumRepository.findAllSection(idClass);
	      List<GetCurriculumSectionDto> data = new ArrayList<GetCurriculumSectionDto>();
	      for (String curriculum: curriculumList) {
	         data.add(new GetCurriculumSectionDto(curriculum));
	      }
	          
	      return ResponseDto.setSuccess("Get User List Success", data);
	 }
	 
	 public ResponseDto<List<GetCurriculumResponseDto>> findAll(int idClass){
	      List<CurriculumEntity> curriculumList = curriculumRepository.findAllCurriculum(idClass);
	      List<GetCurriculumResponseDto> data = new ArrayList<GetCurriculumResponseDto>();
	      for (CurriculumEntity curriculum: curriculumList) {
	         data.add(new GetCurriculumResponseDto(curriculum));
	      }
	          
	      return ResponseDto.setSuccess("Get User List Success", data);
	 }
}
