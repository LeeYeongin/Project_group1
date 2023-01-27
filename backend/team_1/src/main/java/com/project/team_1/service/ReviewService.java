package com.project.team_1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.dto.response.ResultResponseDTO;
import com.project.team_1.dto.review.PatchReviewDTO;
import com.project.team_1.dto.review.ReviewDTO;
import com.project.team_1.entity.ReviewEntity;
import com.project.team_1.repository.ReviewRepository;

@Service
public class ReviewService {
	
	@Autowired
	ReviewRepository reviewRepository;

	public ResponseDto<ResultResponseDTO> ReviewWrite(ReviewDTO dto) {
		
		ReviewEntity review = ReviewEntity.builder()
				.idUser(dto.getIdUser())
				.contents(dto.getContents())
				.idClass(dto.getIdClass())
				.grade(dto.getGrade())
				.build();
		reviewRepository.save(review);
		
		System.out.println(reviewRepository);
		
		return ResponseDto.setSuccess("리뷰 작성 성공", new ResultResponseDTO(true));
	}

	public ResponseDto<ResultResponseDTO> ReviewUpdate(PatchReviewDTO dto) {
		
		int reviewId = dto.getReviewId();
		ReviewEntity review = null;
		
		try {
			review = reviewRepository.findById(reviewId).get();
		}catch(Exception e) {
			return ResponseDto.setFailed("해당 리뷰는 존재하지 않습니다.");
		}
		
		review.setContents(dto.getContents());
		review.setGrade(dto.getGrade());
		
		reviewRepository.save(review);

		return ResponseDto.setSuccess("수정 성공", new ResultResponseDTO(true));
	}

}
