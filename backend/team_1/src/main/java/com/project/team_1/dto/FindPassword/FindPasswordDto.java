package com.project.team_1.dto.FindPassword;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class FindPasswordDto {

	private boolean result;

	public FindPasswordDto(boolean result) {
		this.result = result;
	}

}