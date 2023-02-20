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

import com.project.team_1.dto.orderList.ClassNameDto;
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

	public ResponseDto<List<GetOrderListDto>> showOrderList(String idUser) {
		List<GetOrderListDto> data = new ArrayList<GetOrderListDto>();
		List<OrderMstEntity> orderMst;

		try {
			orderMst = orderMstRepository.findByIdUser(idUser);
		} catch (Exception e) {
			return ResponseDto.setFailed("xxx");
		}

		for (OrderMstEntity orderMstEntity : orderMst) {
			List<OrderDtlEntity> orderDtl = orderDtlRepository.findByOrderNumber(orderMstEntity.getOrderNumber());
			List<ClassNameDto> className = new ArrayList<ClassNameDto>();
			int priceSum = 0;
			for (OrderDtlEntity orderDtlEntity : orderDtl) {
				int idClass = classRepository.findById(orderDtlEntity.getIdClass()).get().getIdClass();
				String img = classRepository.findById(orderDtlEntity.getIdClass()).get().getImg();
				String name = classRepository.findById(orderDtlEntity.getIdClass()).get().getClassName();
				className.add(new ClassNameDto(idClass, img, name));
				priceSum += classRepository.findById(orderDtlEntity.getIdClass()).get().getPrice();
			}

			data.add(new GetOrderListDto(orderMstEntity, className, priceSum));
		}
		return ResponseDto.setSuccess("getClassList success", data);
	}
}
