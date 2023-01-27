package com.project.team_1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.project.team_1.dto.cart.GetCartListDto;
import com.project.team_1.dto.cart.GetCartResponseDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.entity.CartEntity;
import com.project.team_1.repository.CartRepository;

@Service
public class CartService {
	@Autowired
	CartRepository cartRepository;
	
	public ResponseDto<List<GetCartResponseDto>> getCartList(GetCartListDto dto){
		
		List<CartEntity> CartList = null;
		try {
			CartList = cartRepository.findByIdUser(dto.getIdUser());
			if(CartList.isEmpty())
				return ResponseDto.setFailed("Not Exist");
		}
		catch (Exception e) {
			return ResponseDto.setFailed("error");
		}
		
		List<GetCartResponseDto> data = new ArrayList<GetCartResponseDto>();
		for (CartEntity cart: CartList) {
	         data.add(new GetCartResponseDto(cart));
	     }
		
		return ResponseDto.setSuccess("Get Cart List Success", data);
	}

}
