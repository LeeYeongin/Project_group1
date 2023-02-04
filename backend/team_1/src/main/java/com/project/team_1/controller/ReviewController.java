package com.project.team_1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.dto.response.ResultResponseDTO;
import com.project.team_1.dto.review.GetReviewResponseDTO;
import com.project.team_1.dto.review.PatchReviewDTO;
import com.project.team_1.dto.review.ReviewDTO;
import com.project.team_1.service.ReviewService;

@RestController
@RequestMapping("/") // 여기에 강의 ID가 들어가야 한다
public class ReviewController {
	
	@Autowired ReviewService reviewService;
	
	// 리뷰 작성
	@PostMapping("writeReview")
	public ResponseDto<ResultResponseDTO> writeReview(@RequestBody ReviewDTO reviewDto) {
		return reviewService.ReviewWrite(reviewDto);
	}
	
	// 리뷰 불러오기(강의ID에 따른 내용가져오기)
	@GetMapping("/re/"+"{idClass}")
	public ResponseDto<List<GetReviewResponseDTO>> getReview(@PathVariable("idClass") int idClass){
		return reviewService.getReview(idClass);
	}
	
	// 리뷰 수정
	@PatchMapping("updateReview")
	public ResponseDto<ResultResponseDTO> updateReview(@RequestBody PatchReviewDTO patchDto){
		return reviewService.ReviewUpdate(patchDto);
	}
	
	// 리뷰 삭제
	@DeleteMapping("/deleteReview/{idReview}")
	public ResponseDto<?> deleteReview(@PathVariable("idReview") int idReview){
		
		return reviewService.ReviewDelete(idReview);
	}
}
