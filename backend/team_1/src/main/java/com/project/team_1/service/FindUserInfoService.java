package com.project.team_1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.team_1.dto.FindId.FindIdDto;
import com.project.team_1.dto.FindId.FindIdResponseDto;
import com.project.team_1.dto.FindPassword.ChangePasswordDto;
import com.project.team_1.dto.FindPassword.FindPasswordDto;
import com.project.team_1.dto.FindPassword.GetFindPasswordDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.entity.UserEntity;
import com.project.team_1.repository.UserRepository;

@Service
public class FindUserInfoService {

	@Autowired
	UserRepository userRepository;
	
	private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
	public ResponseDto<FindIdResponseDto> FindId(FindIdDto dto) {

		String name = dto.getName();
		String telnum = dto.getTelnum();
		UserEntity userEntity = null;
		// 이름 전화번호를 받아왔으니까 일치하는 유저데이터 갖고와서 그중에 찾는 유저아이디를 반환
		try {
			userEntity = userRepository.findByNameAndTelnum(name, telnum);
			if (userEntity == null)
				return ResponseDto.setFailed("Not Exist user");
		} catch (Exception error) {
			return ResponseDto.setFailed("Data base Error!");
		}
		FindIdResponseDto findIdResponseDto = new FindIdResponseDto(userEntity.getIdUser());
		return ResponseDto.setSuccess("FindId success", findIdResponseDto);
	}

	public ResponseDto<FindPasswordDto> getPassword(GetFindPasswordDto dto) {
		FindPasswordDto findPassword;
		UserEntity user;

		try {
			user = userRepository.findByIdUserAndTelnum(dto.getUserId(), dto.getTelnum());

		} catch (Exception e) {
			return ResponseDto.setFailed("Error");
		}

		if (user == null) {
			findPassword = new FindPasswordDto(false);
		} else {
			findPassword = new FindPasswordDto(true);
		}

		return ResponseDto.setSuccess("success", findPassword);

	}

	public ResponseDto<FindPasswordDto> changePassword(ChangePasswordDto dto) {
		String userId = dto.getIdUser();
		String password = dto.getPassword();
		String password2 = dto.getPassword2();

		UserEntity user = userRepository.findByIdUser(userId);

		if (!password.equals(password2)) {
			return ResponseDto.setFailed("Password does not matched!");
		}

		String encodedPassword = passwordEncoder.encode(password);
		user.setPassword(encodedPassword);

		userRepository.save(user);

		return ResponseDto.setSuccess("Success change password", new FindPasswordDto(true));
	}
}
