package com.project.team_1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.team_1.dto.curriculum.GetCurriculumResponseDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.entity.CurriculumEntity;
import com.project.team_1.repository.CurriculumRepository;
import com.yeongin.board.dto.user.GetUserResponseDto;
import com.yeongin.board.entity.MemberEntity;

@Service
public class CurriculumService {
	@Autowired
	CurriculumRepository curriculumRepository;
	
	public ResponseDto<List<GetCurriculumResponseDto>> findSection(int idClass){
		List<CurriculumEntity> curriculumList = curriculumRepository.findAllSection(idClass);
		List<GetCurriculumResponseDto> data = new ArrayList<GetCurriculumResponseDto>();
		for (CurriculumEntity member: curriculumList) {
			data.add(new GetCurriculumResponseDto(member));
		}
		
		return ResponseDto.setSuccess("Get User List Success", data);
	}
}
