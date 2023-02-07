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
	private String id;
	private String password;
	private String name;
	private String profile;
	private String nickname;
	private String email;
	private String telnum;
	private String description;
	
	public UserEntity(SignupDto dto) {
		this.id = dto.getId();
		this.password = dto.getPassword();
		this.name = dto.getName();
		this.telnum = dto.getTelNum();
		this.email = dto.getId();
		this.nickname = dto.getId().substring(0,dto.getId().indexOf('@'));
	}
}
