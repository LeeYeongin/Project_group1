package com.project.team_1.entity;


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
@Entity(name="orderDtl")
@Table(name="order_dtl")
public class OrderDtlEntity {
	   @Id
	   @GeneratedValue(strategy = GenerationType.IDENTITY)
	   private int idOrderDtl;
	//   private int idOrder;
	   private String orderNumber;
	   private int idClass;
	   private int price;
	   
	   public OrderDtlEntity(String orderNumber, int idClass, int price) {
	      this.orderNumber = orderNumber;
	      this.idClass = idClass;
	      this.price = price;
	   }
	}
