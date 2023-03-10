package com.project.team_1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.orderList.GetOrderListDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.service.ClassService;

@RestController
@RequestMapping("/myCourse/")
public class MyCourseController {

	@Autowired
	ClassService classService;

	@GetMapping("")
	public ResponseDto<List<GetOrderListDto>> getShowOrderList(@AuthenticationPrincipal String idUser) {
		return classService.showOrderList(idUser);
	}

}
