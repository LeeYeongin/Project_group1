package com.project.team_1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.service.CurriculumService;
import com.project.team_1.dto.curriculum.GetCurriculumResponseDto;
import com.project.team_1.dto.curriculum.GetCurriculumSectionDto;
import com.project.team_1.dto.response.ResponseDto;

@RestController
@RequestMapping("main5/")
public class CurriculumController {

	@Autowired
	CurriculumService curriculumService;

	@GetMapping("{idClass}")
	public ResponseDto<List<GetCurriculumSectionDto>> getAllCurriculumSection(@PathVariable("idClass") int idClass) {
		return curriculumService.findAllSection(idClass);
	}

	@GetMapping("curri/{idClass}")
	public ResponseDto<List<GetCurriculumResponseDto>> getAllCurriculum(@PathVariable("idClass") int idClass) {
		return curriculumService.findAll(idClass);
	}

}
