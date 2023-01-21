package com.project.team_1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.team_1.dto.curriculum.GetCurriculumResponseDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.entity.CurriculumEntity;
import com.project.team_1.repository.CurriculumRepository;

@Service
public class CurriculumService {
	@Autowired
	CurriculumRepository curriculumRepository;
	
	public ResponseDto<List<GetCurriculumResponseDto>> findAllSection(int idClass){
		List<CurriculumEntity> curriculumList = curriculumRepository.findAllSection(idClass);
		List<GetCurriculumResponseDto> data = new ArrayList<GetCurriculumResponseDto>();
		for (CurriculumEntity curriculum: curriculumList) {
			data.add(new GetCurriculumResponseDto(curriculum));
		}
		    
		return ResponseDto.setSuccess("Get User List Success", data);
	}
}
