package com.project.team_1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.cart.GetCartClassListDto;
import com.project.team_1.dto.cart.GetCartListDto;
import com.project.team_1.dto.cart.GetCartResponseDto;
import com.project.team_1.dto.cart.GetCartUserInfoDto;
import com.project.team_1.dto.cart.PostCartDto;
import com.project.team_1.dto.cart.PostCartId;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.dto.response.ResultResponseDTO;
import com.project.team_1.service.CartService;

@RestController
@RequestMapping("cart/")
public class CartController {
	
	@Autowired CartService cartService;
	
	@PostMapping("")
	public ResponseDto<List<GetCartClassListDto>> getCartList(@RequestBody GetCartListDto requestBody){
		return cartService.getCartList(requestBody);
	}
	
	@PostMapping("user")
	public ResponseDto<GetCartUserInfoDto> getCartUserInfo(@RequestBody GetCartListDto requestBody){
		return cartService.getCartUserInfo(requestBody);
	}
	
//	@PostMapping("delete")
//	public ResponseDto<ResultResponseDTO> deleteCartList(@RequestBody List<PostCartId> requestBody){
//		return cartService.deleteCartList(requestBody);
//	}
	
	@PostMapping("delete")
	public ResponseDto<ResultResponseDTO> deleteCartList(@RequestBody List<Integer> requestBody){
		return cartService.deleteCartList(requestBody);
	}
	
	@PostMapping("add")
	public ResponseDto<ResultResponseDTO> addCartList(@RequestBody GetCartResponseDto requestBoydy){
		return cartService.addCartList(requestBoydy);
	}


}
