package com.project.team_1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.team_1.dto.MyPage.GetUserIfnoDto;
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

	private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

	public ResponseDto<?> signUp(SignupDto dto) {
		String userEmail = dto.getUserId();
		String userPassword = dto.getPassword();
		String userPasswordConfirm = dto.getPasswordConfirm();
		String userTelnum = dto.getTelNum();

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

		if (userTelnum.isEmpty()) {
			return ResponseDto.setFailed("failed");
		}

		// UserEntity 생성
		UserEntity UserEntity = new UserEntity(dto);

		// 비밀번호 암호화
		String encodedPassword = passwordEncoder.encode(userPassword);
		UserEntity.setPassword(encodedPassword);

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
		String id = dto.getUserId();
		String password = dto.getPassword();
		UserEntity userEntity = null;
		try {
			userEntity = userRepository.findByIdUser(id);
			// 잘못된 이메일
			if (userEntity == null)
				return ResponseDto.setFailed("Sign In failed");
			// 잘못된 패스워드
			if (!passwordEncoder.matches(password, userEntity.getPassword())) {
				return ResponseDto.setFailed("Sign In failed");
			}

		} catch (Exception error) {
			return ResponseDto.setFailed("Data Base Error!");
		}

		userEntity.setPassword("");

		String token = tokenProvider.create(id);
		int exprTime = 3600000;

		SigninResponseDto signInResponseDto = new SigninResponseDto(token, exprTime, userEntity);
		return ResponseDto.setSuccess("Sign In Success", signInResponseDto);

	}

	public ResponseDto<GetUserIfnoDto> getSignIn(String userid) {
		UserEntity userEntity;

		try {
			userEntity = userRepository.findByIdUser(userid);
		} catch (Exception e) {
			return ResponseDto.setFailed("잘못된 아이디입니다");
		}
		return ResponseDto.setSuccess("불러오기 성공", new GetUserIfnoDto(userEntity));
	}

}
