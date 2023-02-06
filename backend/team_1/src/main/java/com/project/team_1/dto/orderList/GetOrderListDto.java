package com.project.team_1.dto.orderList;

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
	private int idOrder;
	private String orderDate;
	private String status;
	private int idClass;
	private int price;
	
	public GetOrderListDto(OrderMstEntity orderMstEntity, OrderDtlEntity orderDtlEntity) {
		this.idUser = orderMstEntity.getIdUser();
		this.idOrder = orderMstEntity.getIdOrder();
		this.orderDate = orderMstEntity.getOrderDate();
		this.status = orderMstEntity.getStatus();
		this.idClass = orderDtlEntity.getIdClass();
		this.price = orderDtlEntity.getPrice();
	}

}
