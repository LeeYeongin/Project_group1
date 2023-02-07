package com.project.team_1.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idOrder;
	private Date orderDate;
	private String idUser;
	private String status;
	private String orderNumber;
	
	public OrderMstEntity(Date orderDate, String idUser, String status, String orderNumber) {
		this.orderDate = orderDate;
		this.idUser = idUser;
		this.status = status;
		this.orderNumber = orderNumber;
	}
}
