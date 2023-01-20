package com.project.team_1.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
