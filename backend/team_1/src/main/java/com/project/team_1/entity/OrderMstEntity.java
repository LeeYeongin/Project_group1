package com.project.team_1.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="orderMst")
@Table(name="order_mst")
public class OrderMstEntity {
	@Id
	private int idOrder;
	private String orderDate;
	private String idUser;
	private String status;
}
