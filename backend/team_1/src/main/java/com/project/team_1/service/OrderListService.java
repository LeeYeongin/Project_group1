package com.project.team_1.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.stereotype.Service;


import com.project.team_1.dto.orderList.GetOrderListDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.entity.ClassEntity;
import com.project.team_1.entity.OrderDtlEntity;
import com.project.team_1.entity.OrderMstEntity;
import com.project.team_1.repository.ClassRepository;
import com.project.team_1.repository.OrderDtlRepository;
import com.project.team_1.repository.OrderMstRepository;

@Service
public class OrderListService {
	
	@Autowired
	OrderMstRepository orderMstRepository;
	
	@Autowired
	OrderDtlRepository orderDtlRepository;
	
	@Autowired
	ClassRepository classRepository;
	
	public ResponseDto<GetOrderListDto>showOrderList(String idUser){
		
		OrderMstEntity orderMstEntity;
		
		try {
			orderMstEntity = orderMstRepository.findByIdUser(idUser).get(0);
		}catch(Exception e){
			return ResponseDto.setFailed("xxx");
		}
		
		List<OrderDtlEntity> orderDtl = orderDtlRepository.findByOrderNumber(orderMstEntity.getOrderNumber());
		List<ClassEntity> classEntity = new ArrayList<ClassEntity>();
		for(OrderDtlEntity orderDtlEntity : orderDtl) {
			classEntity.add(classRepository.findById(orderDtlEntity.getIdClass()).get());
		}
//		 = classRepository.findById(orderDtl.);
		
		GetOrderListDto data = 
				GetOrderListDto
				.builder()
				.idUser(idUser)
				.orderNumber(orderMstEntity.getOrderNumber())
				.orderDate(orderMstEntity.getOrderDate())
				.status(orderMstEntity.getStatus())
				.orderDtlList(orderDtl)
				.classEntity(classEntity)
				.build();
				
		
		return ResponseDto.setSuccess("getClassList success", data);
	}
}
