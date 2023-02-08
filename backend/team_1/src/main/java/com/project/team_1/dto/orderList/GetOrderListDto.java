package com.project.team_1.dto.orderList;

import java.util.Date;
import java.util.List;

import com.project.team_1.entity.ClassEntity;
import com.project.team_1.entity.OrderDtlEntity;
import com.project.team_1.entity.OrderMstEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetOrderListDto {
	
	private String idUser;
	private String orderNumber;
	private Date orderDate;
	private String status;
	private List<ClassNameDto> className;
	private int price;
//	private List<OrderDtlEntity> orderDtlList;
//	private List<ClassEntity> classEntity;
	
//	public GetOrderListDto(OrderMstEntity orderMstEntity, List<OrderDtlEntity> orderDtlEntity, List<ClassEntity> classEntity) {
//		this.idUser = orderMstEntity.getIdUser();
//		this.orderNumber = orderMstEntity.getOrderNumber();
//		this.orderDate = orderMstEntity.getOrderDate();
//		this.status = orderMstEntity.getStatus();
//		this.orderDtlList = orderDtlEntity;
//		this.classEntity = classEntity;
//	}
	
	public GetOrderListDto(OrderMstEntity orderMstEntity, List<ClassNameDto> className, int price) {
		this.idUser = orderMstEntity.getIdUser();
		this.orderNumber = orderMstEntity.getOrderNumber();
		this.orderDate = orderMstEntity.getOrderDate();
		this.status = orderMstEntity.getStatus();
//		this.className = new ClassNameDto(className);
		this.className = className;
		this.price = price;
	}

}
