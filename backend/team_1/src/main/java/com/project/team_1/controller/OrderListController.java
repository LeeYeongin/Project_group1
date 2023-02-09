package com.project.team_1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.orderList.GetOrderListDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.service.OrderListService;

@RestController
@RequestMapping("/api/orderlist")
public class OrderListController {
	
	@Autowired
	OrderListService orderListService;
	
	@GetMapping("/{idUser}")
	public ResponseDto<List<GetOrderListDto>>getShowOrderList(@PathVariable("idUser") String idUser){
		return orderListService.showOrderList(idUser);
	}
	
}
