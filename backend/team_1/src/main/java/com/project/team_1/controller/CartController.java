package com.project.team_1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.cart.GetCartResponseDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.service.CartService;

@RestController
@RequestMapping("cart/")
public class CartController {
	
	@Autowired CartService cartService;
	
	@GetMapping("{idUser}")
	public ResponseDto<List<GetCartResponseDto>> getCartList(@PathVariable("idUser") String idUser){
		return cartService.getCartList(idUser);
	}

}
