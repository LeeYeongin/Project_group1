package com.project.team_1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.Class.GetClassInfoDto;
import com.project.team_1.dto.Class.GetMyCourseDto;
import com.project.team_1.dto.MyPage.UserIdDto;
import com.project.team_1.dto.orderList.GetOrderListDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.service.ClassService;

@RestController
@RequestMapping("myCourse/")
public class MyCourseController {

	@Autowired ClassService classService;
	
	@GetMapping("{idUser}")
	public ResponseDto<List<GetOrderListDto>>getShowOrderList(@PathVariable("idUser") String idUser){
		return classService.showOrderList(idUser);
	}
	
}


