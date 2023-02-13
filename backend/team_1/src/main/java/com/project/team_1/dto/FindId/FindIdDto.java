package com.project.team_1.dto.FindId;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class FindIdDto {
	
	@NotBlank
	private String name;
	@NotBlank
	private String telnum;
	

}
