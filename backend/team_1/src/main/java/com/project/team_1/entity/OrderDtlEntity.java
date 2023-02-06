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
@Entity(name="orderDtl")
@Table(name="order_dtl")
public class OrderDtlEntity {
	@Id
	private int idOrderDtl;
	private int idOrder;
	private int idClass;
	private int price;
}
