package com.project.team_1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.Class.PostClassId;
import com.project.team_1.dto.cart.GetCartClassListDto;
import com.project.team_1.dto.cart.GetCartUserInfoDto;
import com.project.team_1.dto.payment.PaymentInfoDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.dto.response.ResultResponseDTO;
import com.project.team_1.service.CartService;

@RestController
@RequestMapping("/api/cart/")
public class CartController {
	
	@Autowired CartService cartService;

	@GetMapping("")
	public ResponseDto<List<GetCartClassListDto>> getCartList(@AuthenticationPrincipal String userId){
		return cartService.getCartList(userId);
	}
	
	@GetMapping("user")
	public ResponseDto<GetCartUserInfoDto> getCartUserInfo(@AuthenticationPrincipal String userId){
		return cartService.getCartUserInfo(userId);
	}
	
	@PostMapping("delete")
	public ResponseDto<ResultResponseDTO> deleteCartList(@RequestBody List<Integer> requestBody){
		return cartService.deleteCartList(requestBody);
	}
	
	@PostMapping("add")
	public ResponseDto<ResultResponseDTO> addCartList(@RequestBody PostClassId requestBody, @AuthenticationPrincipal String userId){
		return cartService.addCartList(requestBody, userId);
	}

	@PostMapping("payment")
	public ResponseDto<ResultResponseDTO> payClass(@RequestBody PaymentInfoDto requestBody){
		return cartService.payClass(requestBody);
	}
}
