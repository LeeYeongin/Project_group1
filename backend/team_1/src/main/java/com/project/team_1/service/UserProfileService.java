package com.project.team_1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.project.team_1.dto.MyPage.GetUserIfnoDto;
import com.project.team_1.dto.MyPage.GetUserPostingDto;
import com.project.team_1.dto.MyPage.SetUserDto;
import com.project.team_1.dto.MyPage.UserIdDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.dto.response.ResultResponseDTO;
import com.project.team_1.entity.ReviewEntity;
import com.project.team_1.entity.UserEntity;
import com.project.team_1.repository.ClassRepository;
import com.project.team_1.repository.ReviewRepository;
import com.project.team_1.repository.UserRepository;

@Service
public class UserProfileService {
	@Autowired
	UserRepository userRepository;
	@Autowired
	ReviewRepository reviewRepository;
	@Autowired
	ClassRepository classRepository;
	
	public ResponseDto<GetUserIfnoDto> getUserProfile(UserIdDto dto){
		GetUserIfnoDto userinfo;
		try {
			userinfo = new GetUserIfnoDto(userRepository.findById(dto.getUserId()).get());
		}catch (Exception e) {
			return ResponseDto.setFailed("error");
		}
		return ResponseDto.setSuccess("Get Profile Success", userinfo);
	}
	
	public ResponseDto<ResultResponseDTO> deleteUser(String idUser) {
		userRepository.deleteById(idUser);
		
		return ResponseDto.setSuccess("SUCCESS", new ResultResponseDTO(true));
	}
	
	public ResponseDto<GetUserIfnoDto> setUserProfile(SetUserDto dto) {
		String name = dto.getName();
		
		UserEntity user = null;
		try {
			user = userRepository.findByName(name);
		} catch (Exception e) {
			return ResponseDto.setFailed("failed");
		}
		
		user.setProfile(dto.getProfile());
		user.setNickname(dto.getNickname());
		user.setEmail(dto.getEmail());
		user.setPassword(dto.getPassword());
		user.setTelnum(dto.getTelNum());
		user.setDescription(dto.getDescription());
		
		userRepository.save(user);
		
		return ResponseDto.setSuccess("success",new GetUserIfnoDto(user));
		
	}
	
	public ResponseDto<List<GetUserPostingDto>> getUserPosting(String idUser) {
		List<GetUserPostingDto> data = new ArrayList<GetUserPostingDto>();
		List<ReviewEntity> reviewEntity;
		reviewEntity = reviewRepository.findByIdUser(idUser);
		for(ReviewEntity review : reviewEntity) {
			String className = classRepository.findById(review.getIdClass()).get().getClassName();
			data.add(new GetUserPostingDto(review, className));
		}
		
		return ResponseDto.setSuccess("success", data);
	}
}
