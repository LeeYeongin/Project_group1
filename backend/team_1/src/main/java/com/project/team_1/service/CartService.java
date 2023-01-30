package com.project.team_1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.project.team_1.dto.cart.GetCartClassInfoDto;
import com.project.team_1.dto.cart.GetCartClassListDto;
import com.project.team_1.dto.cart.GetCartListDto;
import com.project.team_1.dto.cart.GetCartResponseDto;
import com.project.team_1.dto.cart.GetCartUserInfoDto;
import com.project.team_1.dto.cart.PostCartDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.dto.response.ResultResponseDTO;
import com.project.team_1.entity.CartEntity;
import com.project.team_1.entity.ClassEntity;
import com.project.team_1.entity.UserEntity;
import com.project.team_1.repository.CartRepository;
import com.project.team_1.repository.ClassRepository;
import com.project.team_1.repository.UserRepository;

@Service
public class CartService {
	@Autowired
	CartRepository cartRepository;
	@Autowired 
	ClassRepository classRepository;
	@Autowired
	UserRepository userRepository;
	
	// cart에 담긴 강의정보 불러오기
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
			
//			List<GetCartResponseDto> data = new ArrayList<GetCartResponseDto>();
//			for (CartEntity cart: CartList) {
//		         data.add(new GetCartResponseDto(cart));
//		     }

			
//			for(GetCartResponseDto cartClassList: data) {
//				int classID = cartClassList.getIdClass();
//				ClassList.add(classRepository.findById(classID).get());
//			}
			
//			List<GetCartClassListDto> dataClass = new ArrayList<GetCartClassListDto>();
//			for (ClassEntity classEntity: ClassList) {
//		         dataClass.add(new GetCartClassListDto(classEntity));
//		     }
			
			List<GetCartClassListDto> dataClass = new ArrayList<GetCartClassListDto>();
			for(CartEntity cart: CartList) {
				dataClass.add(new GetCartClassListDto(cart.getIdCart(), new GetCartClassInfoDto(classRepository.findById(cart.getIdClass()).get())));
			}
			
			return ResponseDto.setSuccess("Get Cart List Success", dataClass);
		}
	
	
	public ResponseDto<GetCartUserInfoDto> getCartUserInfo(GetCartListDto dto){
		UserEntity user;
		try {
			user = userRepository.findById(dto.getIdUser()).get();
			
		}catch (Exception e) {
			return ResponseDto.setFailed("error");
		}
		
		return ResponseDto.setSuccess("Get Cart User Informaiton Success", new GetCartUserInfoDto(user));
		
	}
	
	// 선택한 강의정보 삭제
	public ResponseDto<ResultResponseDTO> deleteCartList(List<PostCartDto> requestBody) {
		List<Integer> idCart = new ArrayList<Integer>();
		for(PostCartDto cartdto: requestBody) {
			idCart.add(cartdto.getIdCart());
		}
		cartRepository.deleteAllById(idCart);
		return ResponseDto.setSuccess("Succes delete cart list", new ResultResponseDTO(true));
	}
	

}
