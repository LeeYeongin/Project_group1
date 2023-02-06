package com.project.team_1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.team_1.dto.orderList.GetOrderListDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.entity.OrderMstEntity;
import com.project.team_1.repository.OrderDtlRepository;
import com.project.team_1.repository.OrderMstRepository;

@Service
public class OrderListService {
	
	@Autowired
	OrderMstRepository orderMstRepository;
	
	@Autowired
	OrderDtlRepository orderDtlRepository;
	
	public ResponseDto<List<GetOrderListDto>>showOrderList(String idUser){
		List<OrderMstEntity> showOrderList = orderMstRepository.findByIdUser(idUser);
		
		return ResponseDto.setSuccess("getClassList success", null);
	}
}
