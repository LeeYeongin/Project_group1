package com.project.team_1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.project.team_1.dto.cart.GetCartClassListDto;
import com.project.team_1.dto.cart.GetCartListDto;
import com.project.team_1.dto.cart.GetCartResponseDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.entity.CartEntity;
import com.project.team_1.entity.ClassEntity;
import com.project.team_1.repository.CartRepository;
import com.project.team_1.repository.ClassRepository;

@Service
public class CartService {
	@Autowired
	CartRepository cartRepository;
	@Autowired 
	ClassRepository classRepository;
	
	public ResponseDto<List<GetCartClassListDto>> getCartList(GetCartListDto dto){
		
		List<CartEntity> CartList = null;
		List<ClassEntity> ClassList = new ArrayList<ClassEntity>();
		
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
		
		for(GetCartResponseDto cartClassList: data) {
			int classID = cartClassList.getIdClass();
			ClassList.add(classRepository.findById(classID).get());
		}
		
		List<GetCartClassListDto> dataClass = new ArrayList<GetCartClassListDto>();
		for (ClassEntity classEntity: ClassList) {
	         dataClass.add(new GetCartClassListDto(classEntity));
	     }
		
		return ResponseDto.setSuccess("Get Cart List Success", dataClass);
	}
	
	

}
