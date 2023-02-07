package com.project.team_1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.team_1.dto.SignIn.SignInDto;
import com.project.team_1.dto.Signup.SigninResponseDto;
import com.project.team_1.dto.Signup.SignupDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.entity.UserEntity;
import com.project.team_1.repository.UserRepository;
import com.project.team_1.security.TokenProvider;

@Service

public class AuthService {

	@Autowired
	UserRepository userRepository;
	@Autowired
	TokenProvider tokenProvider;

	public ResponseDto<?> signUp(SignupDto dto) {
		String userEmail = dto.getId();
		String userPassword = dto.getPassword();
		String userPasswordConfirm = dto.getPasswordConfirm();

		// email 중복 확인
		try {

			if (userRepository.existsById(userEmail))
				return ResponseDto.setFailed("Existed Email!");
		} catch (Exception error) {
			return ResponseDto.setFailed("Data base Error!");
		}

		// 비밀번호가 서로 다르면 failed response 반환!
		if (!userPassword.equals(userPasswordConfirm))
			return ResponseDto.setFailed("Password does not matched!");

		// UserEntity 생성
		UserEntity UserEntity = new UserEntity(dto);

		// UserRepository를 이용해서 데이터베이스에 Entity 저장!
		try {
			userRepository.save(UserEntity);
		} catch (Exception error) {
			return ResponseDto.setFailed("Data Base Error!");
		}

		// 성공시 success response 반환
		return ResponseDto.setSuccess("Sign up Success!", null);
	}

	public ResponseDto<SigninResponseDto> signIn(SignInDto dto) {
		String id = dto.getId();
		String password = dto.getPassword();
		try {
			boolean existed = userRepository.existsByIdAndPassword(id, password);
			if (!existed)
				return ResponseDto.setFailed("Sign In Informaion Does Not Match");
		} catch (Exception error) {
			return ResponseDto.setFailed("Data Base Error!");
		}

		UserEntity userEntity = null;
		try {
			userEntity = userRepository.findById(id).get();
		} catch (Exception error) {
			return ResponseDto.setFailed("Data Base Error!");
		}
		
		userEntity.setPassword("");

		String token = tokenProvider.create(id);
		int exprTime = 3600000;

		SigninResponseDto signInResponseDto = new SigninResponseDto(token, exprTime, userEntity);
		return ResponseDto.setSuccess("Sign In Success", signInResponseDto);

	}

}
