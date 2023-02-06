package com.project.team_1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.dto.response.ResultResponseDTO;
import com.project.team_1.dto.review.GetReviewResponseDTO;
import com.project.team_1.dto.review.PatchReviewDTO;
import com.project.team_1.dto.review.ReviewDTO;
import com.project.team_1.entity.ReviewEntity;
import com.project.team_1.repository.ReviewRepository;

@Service
public class ReviewService {
	
	@Autowired
	ReviewRepository reviewRepository;
	
	// 리뷰 읽기(상세에서 읽는용도)
	public ResponseDto<List<GetReviewResponseDTO>> getReview(int idClass){
		
		List<ReviewEntity> reviewList = reviewRepository.findByIdClass(idClass);
		
		List<GetReviewResponseDTO> data = new ArrayList<GetReviewResponseDTO>();
		
		for(ReviewEntity review : reviewList) {
			data.add(new GetReviewResponseDTO(review));
		}
		
		return ResponseDto.setSuccess("리뷰 불러오기 성공", data);
	}

	// 리뷰 작성
	public ResponseDto<ResultResponseDTO> ReviewWrite(ReviewDTO dto) {
		
		ReviewEntity review = ReviewEntity.builder()
				.idUser(dto.getIdUser())
				.contents(dto.getContents())
				.idClass(dto.getIdClass())
				.grade(dto.getGrade())
				.build();
		reviewRepository.save(review);
		
		return ResponseDto.setSuccess("리뷰 작성 성공", new ResultResponseDTO(true));
	}

	// 리뷰 수정
	public ResponseDto<ResultResponseDTO> ReviewUpdate(PatchReviewDTO dto, int idReview) {

		ReviewEntity review = null;
		
		System.out.println(idReview);
		
		try {
			review = reviewRepository.findById(idReview).get();
		}catch(Exception e) {
			return ResponseDto.setFailed("해당 리뷰는 존재하지 않습니다.");
		}
		
		review.setContents(dto.getContents());
		review.setGrade(dto.getGrade());
		
		reviewRepository.save(review);

		return ResponseDto.setSuccess("수정 성공", new ResultResponseDTO(true));
	}

	public ResponseDto<?> ReviewDelete(int idReview) {
		reviewRepository.deleteById(idReview);
		
		return ResponseDto.setSuccess("리뷰 삭제", new ResultResponseDTO(true));
	}

}
