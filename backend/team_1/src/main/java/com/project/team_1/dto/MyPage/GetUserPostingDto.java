package com.project.team_1.dto.MyPage;

import com.project.team_1.entity.ReviewEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetUserPostingDto {
	private int idReview;
	private String idUser;
	private String contents;
	private int idClass;
	private String className;
	
	public GetUserPostingDto(ReviewEntity reviewEntity, String className) {
		this.idReview = reviewEntity.getIdReview();
		this.idUser = reviewEntity.getIdUser();
		this.contents = reviewEntity.getContents();
		this.idClass = reviewEntity.getIdClass();
		this.className = className;
	}
}
