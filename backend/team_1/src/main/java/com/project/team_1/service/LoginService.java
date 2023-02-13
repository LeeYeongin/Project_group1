package com.project.team_1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.team_1.dto.FindPassword.FindPasswordDto;
import com.project.team_1.dto.FindPassword.GetFindPasswordDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.entity.UserEntity;
import com.project.team_1.repository.UserRepository;

@Service
public class LoginService {
   @Autowired
   UserRepository userRepository;
   
   public ResponseDto<FindPasswordDto> getPassword(GetFindPasswordDto dto) {
      FindPasswordDto findPassword;
      UserEntity user;
      
      try {
         user = userRepository.findByUserIdAndTelnum(dto.getUserId(), dto.getTelnum());
         
      } catch (Exception e) {
         return ResponseDto.setFailed("Error");
      }
      
      if(user == null) {
    	  findPassword = new FindPasswordDto(false);
      } else {
    	  findPassword = new FindPasswordDto(true);
      }
      
      return ResponseDto.setSuccess("success", findPassword);
      
   }
}