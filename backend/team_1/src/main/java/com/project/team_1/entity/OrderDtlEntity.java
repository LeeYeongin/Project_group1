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
@Entity(name="orderDtl")
@Table(name="order_dtl")
public class OrderDtlEntity {
	
	@Id
	private int idOrderDtl;
	private int idOrder;
	private int idClass;
	private int price;

}
