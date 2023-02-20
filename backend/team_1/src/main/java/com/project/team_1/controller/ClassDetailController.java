package com.project.team_1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.ClassDetail.GetClassDetailResponseDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.service.ClassDetailService;

@RestController
@RequestMapping("/api/main5/")
public class ClassDetailController {

	@Autowired
	ClassDetailService service;

	@GetMapping("{idClass}/")
	public ResponseDto<GetClassDetailResponseDto> readAllDetail(@PathVariable("idClass") int idClass) {

		return service.readAllDetail(idClass);
	}
}