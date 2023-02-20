package com.project.team_1.dto.FindPassword;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetFindPasswordDto {
	private String userId;
	private String telnum;

}