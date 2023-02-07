package com.project.team_1.dto.orderList;

import java.util.List;

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
	private List<OrderDtlEntity> orderDtlList;
	
	public GetOrderListDto(OrderMstEntity orderMstEntity, List<OrderDtlEntity> orderDtlEntity) {
		this.idUser = orderMstEntity.getIdUser();
		this.idOrder = orderMstEntity.getIdOrder();
		this.orderDate = orderMstEntity.getOrderDate();
		this.status = orderMstEntity.getStatus();
		this.orderDtlList = orderDtlEntity;
	}

}
