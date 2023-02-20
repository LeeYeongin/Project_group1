package com.project.team_1.dto.review;

import com.project.team_1.entity.ReviewEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GetReviewResponseDTO {
	private int ReviewID;
	private String UserID;
	private String Content;
	private int IdClass;
	private int Grade;

	public GetReviewResponseDTO(ReviewEntity review) {
		this.ReviewID = review.getIdReview();
		this.UserID = review.getIdUser();
		this.Content = review.getContents();
		this.IdClass = review.getIdClass();
		this.Grade = review.getGrade();
	}
}
