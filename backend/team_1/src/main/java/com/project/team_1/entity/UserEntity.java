package com.project.team_1.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
}
