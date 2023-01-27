package com.project.team_1.dto.review;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PatchReviewDTO {
	private int ReviewId;
	private String IdUser;
	private String contents;
	private int idClass;
	private int Grade;
}
