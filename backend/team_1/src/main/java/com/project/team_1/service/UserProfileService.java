package com.project.team_1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.team_1.dto.MyPage.GetUserIfnoDto;
import com.project.team_1.dto.MyPage.UserIdDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.repository.UserRepository;

@Service
public class UserProfileService {
	@Autowired
	UserRepository userRepository;
	
	public ResponseDto<GetUserIfnoDto> getUserProfile(UserIdDto dto){
		GetUserIfnoDto userinfo;
		try {
			userinfo = new GetUserIfnoDto(userRepository.findById(dto.getIdUser()).get());
		}catch (Exception e) {
			return ResponseDto.setFailed("error");
		}
		return ResponseDto.setSuccess("Get Profile Success", userinfo);
	}
	

}
