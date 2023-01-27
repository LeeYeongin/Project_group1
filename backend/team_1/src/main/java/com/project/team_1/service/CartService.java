package com.project.team_1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.team_1.dto.cart.GetCartResponseDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.entity.CartEntity;
import com.project.team_1.repository.CartRepository;

@Service
public class CartService {
	@Autowired
	CartRepository cartRepository;
	
	public ResponseDto<List<GetCartResponseDto>> getCartList(String idUser){
		List<CartEntity> CartList;
		try {
			CartList = cartRepository.findByidUser(idUser);
			if(CartList.isEmpty())
				return ResponseDto.setFailed("Not Exist");
		}
		catch (Exception e) {
			return ResponseDto.setFailed("Not Exist");
		}
		
		List<GetCartResponseDto> data = new ArrayList<GetCartResponseDto>();
		for (CartEntity cart: CartList) {
	         data.add(new GetCartResponseDto(cart));
	     }
		
		return ResponseDto.setSuccess("Get Cart List Success", data);
	}

}
