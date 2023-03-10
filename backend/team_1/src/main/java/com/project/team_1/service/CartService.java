package com.project.team_1.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.project.team_1.dto.Class.PostClassId;
import com.project.team_1.dto.cart.GetCartClassInfoDto;
import com.project.team_1.dto.cart.GetCartClassListDto;
import com.project.team_1.dto.cart.GetCartListDto;
import com.project.team_1.dto.cart.GetCartResponseDto;
import com.project.team_1.dto.cart.GetCartUserInfoDto;
import com.project.team_1.dto.cart.PostCartId;
import com.project.team_1.dto.payment.PaymentInfoDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.dto.response.ResultResponseDTO;
import com.project.team_1.entity.CartEntity;
import com.project.team_1.entity.ClassEntity;
import com.project.team_1.entity.InstructorEntity;
import com.project.team_1.entity.OrderDtlEntity;
import com.project.team_1.entity.OrderMstEntity;
import com.project.team_1.entity.UserEntity;
import com.project.team_1.repository.CartRepository;
import com.project.team_1.repository.ClassRepository;
import com.project.team_1.repository.InstructorRepository;
import com.project.team_1.repository.OrderDtlRepository;
import com.project.team_1.repository.OrderMstRepository;
import com.project.team_1.repository.UserRepository;

@Service
public class CartService {
	@Autowired
	CartRepository cartRepository;
	@Autowired
	ClassRepository classRepository;
	@Autowired
	InstructorRepository instructorRepository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	OrderMstRepository orderMstRepository;
	@Autowired
	OrderDtlRepository orderDtlRepository;

	// cart에 담긴 강의정보 불러오기
	public ResponseDto<List<GetCartClassListDto>> getCartList(String userId) {
		List<CartEntity> CartList = null;

		try {
			CartList = cartRepository.findByIdUser(userId);
		} catch (Exception e) {
			return ResponseDto.setFailed("error");
		}

		List<GetCartClassListDto> dataClass = new ArrayList<GetCartClassListDto>();
		for (CartEntity cart : CartList) {
			int instructorId = classRepository.findById(cart.getIdClass()).get().getInstructor();
			InstructorEntity instructor = instructorRepository.findById(instructorId).get();
			GetCartClassInfoDto classInfo = new GetCartClassInfoDto(classRepository.findById(cart.getIdClass()).get(),
					instructor.getInstructorName());
			dataClass.add(new GetCartClassListDto(cart.getIdCart(), classInfo));
		}
		return ResponseDto.setSuccess("Get Cart List Success", dataClass);
	}

	public ResponseDto<GetCartUserInfoDto> getCartUserInfo(String userId) {
		UserEntity user;
		try {
			user = userRepository.findById(userId).get();

		} catch (Exception e) {
			return ResponseDto.setFailed("error");
		}

		return ResponseDto.setSuccess("Get Cart User Informaiton Success", new GetCartUserInfoDto(user));

	}

	public ResponseDto<ResultResponseDTO> deleteCartList(List<Integer> requestBody) {
		cartRepository.deleteAllById(requestBody);
		return ResponseDto.setSuccess("Succes delete cart list", new ResultResponseDTO(true));
	}

	public ResponseDto<ResultResponseDTO> addCartList(PostClassId requestBody, String userId) {
		CartEntity cartEntity = null;

		try {
			cartEntity = cartRepository.findByIdUserAndIdClass(userId, requestBody.getIdClass());
			if (cartEntity != null) {
				return ResponseDto.setFailed("Already existed");
			}
		} catch (Exception error) {
			return ResponseDto.setFailed("Add cart Faild");
		}

		cartRepository.save(new CartEntity(userId, requestBody.getIdClass()));
		return ResponseDto.setSuccess("Succes delete cart list", new ResultResponseDTO(true));
	}

	public ResponseDto<ResultResponseDTO> payClass(@RequestBody PaymentInfoDto dto, String userId) {
		Date now = new Date();
		SimpleDateFormat data = new SimpleDateFormat("yyyyMMdd");
		String date = data.format(now);
		int randomNum = (int) (Math.random() * 100);
		String orderNumber = "H" + date + String.valueOf(randomNum) + String.valueOf(orderMstRepository.count() + 1);

		orderMstRepository.save(new OrderMstEntity(now, userId, "결제 완료", orderNumber));

		for (int cartid : dto.getIdCart()) {
			int idClass = cartRepository.findById(cartid).get().getIdClass();
			ClassEntity classEntity = classRepository.findById(idClass).get();
			int price = classEntity.getPrice();
			orderDtlRepository.save(new OrderDtlEntity(orderNumber, idClass, price));
		}

		return ResponseDto.setSuccess("Payment success", new ResultResponseDTO(true));
	}
}
