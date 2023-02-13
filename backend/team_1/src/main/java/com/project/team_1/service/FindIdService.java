package com.project.team_1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.team_1.dto.FindId.FindIdDto;
import com.project.team_1.dto.FindId.FindIdResponseDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.entity.UserEntity;
import com.project.team_1.repository.UserRepository;

@Service
public class FindIdService {

		@Autowired
		UserRepository userRepository;
		
		public ResponseDto<FindIdResponseDto> FindId(FindIdDto dto) {
			
			String name = dto.getName();
			String telnum = dto.getTelnum();
			UserEntity userEntity = null;
			//이름 전화번호를 받아왔으니까 일치하는 유저데이터 갖고와서 그중에 찾는 유저아이디를 반환 
			try {
				userEntity = userRepository.findByNameAndTelnum(name,telnum);
				if (userEntity == null)
					return ResponseDto.setFailed("Not Exist user");
			} catch (Exception error) {
				return ResponseDto.setFailed("Data base Error!");
			}
			FindIdResponseDto findIdResponseDto = new FindIdResponseDto(userEntity.getUserId());
			return ResponseDto.setSuccess("FindId success", findIdResponseDto);
		}
}
