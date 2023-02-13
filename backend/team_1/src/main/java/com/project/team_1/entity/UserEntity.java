package com.project.team_1.entity;

import com.project.team_1.dto.Signup.SignupDto;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="USER")
@Table(name="USER")
public class UserEntity {

	@Id
	private String userId;
	private String password;
	private String name;
	private String profile;
	private String nickname;
	private String email;
	private String telnum;
	private String description;
	
	public UserEntity(SignupDto dto) {
		this.userId = dto.getUserId();
		this.password = dto.getPassword();
		this.name = dto.getName();
		this.telnum = dto.getTelNum();
		this.email = dto.getUserId();
		this.nickname = dto.getUserId().substring(0,dto.getUserId().indexOf('@'));
	}
	
	public UserEntity(UserEntity userEntity) {
	      this.userId = userEntity.getUserId();
	      this.password = userEntity.getPassword();
	      this.name = userEntity.getName();
	      this.profile = userEntity.getProfile();
	      this.nickname = userEntity.getNickname();
	      this.email = userEntity.getEmail();
	      this.telnum = userEntity.getTelnum();
	      this.description = userEntity.getDescription();
	   }

}
