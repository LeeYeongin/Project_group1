package com.project.team_1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.project.team_1.dto.orderList.GetOrderIdDto;
import com.project.team_1.dto.orderList.GetOrderListDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.entity.OrderDtlEntity;
import com.project.team_1.entity.OrderMstEntity;
import com.project.team_1.repository.OrderDtlRepository;
import com.project.team_1.repository.OrderMstRepository;

@Service
public class OrderListService {
	
	@Autowired
	OrderMstRepository orderMstRepository;
	
	@Autowired
	OrderDtlRepository orderDtlRepository;
	
	public ResponseDto<GetOrderListDto>showOrderList(String idUser){
		
		OrderMstEntity orderMstEntity;
		
		try {
			orderMstEntity = orderMstRepository.findByIdUser(idUser).get(0);
		}catch(Exception e){
			return ResponseDto.setFailed("xxx");
		}
		
		List<OrderDtlEntity> orderDtl = orderDtlRepository.findByidOrder(orderMstEntity.getIdOrder());
		
		GetOrderListDto data = 
				GetOrderListDto
				.builder()
				.idOrder(orderMstEntity.getIdOrder())
				.orderDate(orderMstEntity.getOrderDate())
				.status(orderMstEntity.getStatus())
				.orderDtlList(orderDtl)
				.build();
				
		
		return ResponseDto.setSuccess("getClassList success", data);
	}
}
